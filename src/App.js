import React, { useState } from 'react';
import './App.css';
import PomodoroTimer from './PomodoroTimer';
import ToDoList from './to-do';
import QuickNotes from './quickNotes';
import DistractionBlocker from './DistractionBlocker';
import DailyInsights from './DailyInsights';
import QuoteOfTheDay from './QuoteOfTheDay';
import { ToastProvider } from 'react-toast-notifications';


function App() {
  const [activeTab, setActiveTab] = useState('pomodoro');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ToastProvider>
    <div className="app">
      <div className="tab-buttons">
        <button onClick={() => handleTabChange('pomodoro')}>Pomodoro</button>
        <button onClick={() => handleTabChange('todo')}>To-Do List</button>
        <button onClick={() => handleTabChange('notes')}>Quick Notes</button>
        <button onClick={() => handleTabChange('dailyinsights')}>Daily Insights</button>
        <button onClick={() => handleTabChange('distractionblocker')}>Distraction Blocker</button>
        <button onClick={() => handleTabChange('quoteOfTheDay')}>Daily Quotes</button>
      </div>
      {activeTab === 'pomodoro' && <PomodoroTimer />}
      {activeTab === 'todo' && <ToDoList />}
      {activeTab === 'notes' && <QuickNotes />}
      {activeTab === 'distractionblocker' && <DistractionBlocker />}
      {activeTab === 'dailyinsights' && <DailyInsights />}
      {activeTab === 'quoteOfTheDay' && <QuoteOfTheDay />}
    </div>
    </ToastProvider>
  );
}

export default App;
