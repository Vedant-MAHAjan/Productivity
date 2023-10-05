// DailyInsights.js

import React, { useState, useEffect } from 'react';

function DailyInsights() {
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [focusedWorkTime, setFocusedWorkTime] = useState(0);
  const [mood, setMood] = useState('');

  useEffect(() => {
    const fetchInsightsData = async () => {
      try {
        // Fetch data from the local JSON file (change the path as needed)
        const response = await fetch('/data/insightsData.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update state with the fetched data
        setTasksCompleted(data.tasksCompleted);
        setFocusedWorkTime(data.focusedWorkTime);
        setMood(data.mood);
      } catch (error) {
        console.error('Error fetching insights data:', error);
      }
    };

    // Call the data-fetching function
    fetchInsightsData();
  }, []);

  return (
    <div className="daily-insights">
      <h2>Daily Insights</h2>
      <p>Tasks Completed: {tasksCompleted}</p>
      <p>Total Focused Work Time: {focusedWorkTime} minutes</p>
      <p>Mood: {mood}</p>
    </div>
  );
}

export default DailyInsights;
