// ProductivityTips.js

import React from 'react';
import TimeManagement from './TimeManagement.js';

function ProductivityTips() {
  // Add your productivity tips data here
  const productivityTips = [
    "Tip 1: Prioritize tasks for the day.",
    "Tip 2: Break work into smaller, manageable tasks.",
    "Tip 3: Use the Time Management Technique for focused work.",
    // Add more tips as needed
  ];

  const timeManagementTechniques = [
    {
      title: "Technique 1: The Eisenhower Matrix",
      description: "The Eisenhower Matrix helps you prioritize tasks by urgency and importance. It divides tasks into four categories: Do First (urgent and important), Schedule (important but not urgent), Delegate (urgent but not important), and Eliminate (neither urgent nor important). This technique enhances decision-making and increases productivity.",
    },
    {
      title: "Technique 2: Getting Things Done (GTD)",
      description: "Getting Things Done is a productivity method that emphasizes capturing all your tasks and ideas in an external system. It helps you organize tasks into actionable steps and contexts. This method promotes clarity, reduces mental clutter, and enhances focus on completing tasks.",
    },
    {
      title: "Technique 3: The Two-Minute Rule",
      description: "The Two-Minute Rule suggests that if a task can be completed in two minutes or less, you should do it immediately. It helps prevent small tasks from piling up and causing unnecessary stress. Adhering to this rule can increase productivity by quickly handling small tasks as they arise.",
    },
    // Add more time management techniques as needed
  ];

  const blogLinks = [
    {
      title: "Getting Things Done Methodology",
      link: "https://gettingthingsdone.com/what-is-gtd/",
    },
    {
      title: "The Eisenhower Matrix: A Complete Guide",
      link: "https://todoist.com/productivity-methods/eisenhower-matrix",
    },
    {
      title: "The Pomodoro Technique: A Guide to Time Management",
      link: "https://todoist.com/productivity-methods/pomodoro-technique",
    },
    {
      title: "Stress Management Strategies: Ways to Unwind and Relax",
      link: "https://www.helpguide.org/articles/stress/stress-management.htm",
    },
    {
      title: "Workplace Ergonomics: A Comprehensive Guide",
      link: "https://www.osha.gov/ergonomics",
    },
    // Add more blog links as needed
  ];

  // Inline CSS styles for the h2 and ul elements
  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    // color: '#3498db', s// Adjust the color as needed
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    padding: '10px', // Add some padding for better appearance
    //backgroundColor: '#f2f2f2',// // Add a light background color
    // border: '1px solid #ccc', // Add a border
    // borderRadius: '8px', // Add rounded corners
  };

  const listItemStyle = {
    margin: '5px 0',
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline from links
    color: '#3498db', // Adjust link color as needed
  };

  return (
    <div className="productivity-tips">
      <h2>Productivity Tips</h2>
      <ul>
        {productivityTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <h2>Time Management Techniques</h2>
      <ul>
        {timeManagementTechniques.map((technique, index) => (
          <li key={index}>
            <strong>{technique.title}</strong>
            <p>{technique.description}</p>
          </li>
        ))}
      </ul>

      <h2 style={headingStyle}>Recommended Blogs and Articles</h2>
      <ul style={listStyle}>
        {blogLinks.map((blog, index) => (
          <li key={index} style={listItemStyle}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
      {/* <TimeManagement/> */}
    </div>
  );
}

export default ProductivityTips;
