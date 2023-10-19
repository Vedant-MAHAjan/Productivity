import React, { useState, useEffect } from 'react';

function DailyInsights() {
  const [pomodoroSessions, setPomodoroSessions] = useState(0);

  useEffect(() => {
    // Load the number of pomodoro sessions from local storage
    const sessionsCompleted = localStorage.getItem('pomodoroSessions');
    if (sessionsCompleted) {
      setPomodoroSessions(parseInt(sessionsCompleted, 10));
    }
  }, []);

  // Calculate the total focused work time based on the number of sessions
  const totalFocusedWorkTime = pomodoroSessions * 25;

  // Determine the mood based on the number of sessions
  let mood = 'Focused';
  if (pomodoroSessions >= 2 && pomodoroSessions < 4) {
    mood = 'Motivated';
  } else if (pomodoroSessions >= 4) {
    mood = 'Productive';
  }

  return (
    <div className="daily-insights">
      <h2>Daily Insights</h2>
      <p>Total Focused Work Time: {totalFocusedWorkTime} minutes</p>
      <p>Mood: {mood}</p>
      <p>Pomodoro Sessions Completed Today: {pomodoroSessions}</p>
    </div>
  );
}

export default DailyInsights;
