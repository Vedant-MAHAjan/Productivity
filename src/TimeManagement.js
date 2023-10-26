// TimeManagementTechniques.js
import React from 'react';

function TimeManagement() {
  // Add your time management techniques data here
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

  return (
    <div className="time-management-techniques">
      <h2>Time Management Techniques</h2>
      <ul>
        {timeManagementTechniques.map((technique, index) => (
          <li key={index}>
            <strong>{technique.title}</strong>
            <p>{technique.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeManagement;
