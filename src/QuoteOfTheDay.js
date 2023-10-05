import React, { useState } from 'react';
import { Layout, Button, List } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const config = {
  apiUrl: 'https://type.fit/api/quotes',
  repoUrl: 'https://github.com/ssokurenko/quotes-react-app',
};

const { Header, Content } = Layout;

function QuoteOfTheDay() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const Quote = ({ text, author }) => {
    return (
      <span>
        <strong>{text}</strong> &nbsp; <span>{author}</span>
      </span>
    )
  }

  const getQuoteOfTheDay = () => {
    setIsLoading(true);

    // Fetch quotes from the API
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        // Choose a random quote from the fetched data
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        
        setQuote(randomQuote);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <Content className="container">
      <Button onClick={() => getQuoteOfTheDay()}>
              Quote Of The Day
        </Button>
        <List
          size="small"
          loading={isLoading}
          dataSource={quote ? [quote] : []}
          renderItem={(quoteItem) => (
            <List.Item>
              <Quote text={quoteItem.text} author={quoteItem.author} />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default QuoteOfTheDay;
