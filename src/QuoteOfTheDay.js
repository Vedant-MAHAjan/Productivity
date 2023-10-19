import React, { useState } from 'react';
import { Layout, Button, List, Spin } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import './QuoteOfTheDay.css'; // Import your custom CSS

const config = {
  apiUrl: 'https://type.fit/api/quotes',
  repoUrl: 'https://github.com/ssokurenko/quotes-react-app',
};

const { Content } = Layout;

function QuoteOfTheDay() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const Quote = ({ text, author }) => (
    <div className="quote">
      <p className="quote-text">"{text}"</p>
      <p className="quote-author">- {author}</p>
    </div>
  );

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
        <div className="quote-container">
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={() => getQuoteOfTheDay()}
          >
            Get Quote Of The Day
          </Button>
          {isLoading ? (
            <div className="loading-container">
              <Spin size="large" />
            </div>
          ) : (
            quote && <Quote text={quote.text} author={quote.author} />
          )}
        </div>
      </Content>
    </Layout>
  );
}

export default QuoteOfTheDay;
