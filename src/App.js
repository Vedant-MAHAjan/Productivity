import React, { useState } from 'react';
import './App.css';
import PomodoroTimer from './PomodoroTimer';
import ToDoList from './to-do';
import QuickNotes from './quickNotes';

function App() {
  const [activeTab, setActiveTab] = useState('pomodoro');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <div className="tab-buttons">
        <button onClick={() => handleTabChange('pomodoro')}>Pomodoro</button>
        <button onClick={() => handleTabChange('todo')}>To-Do List</button>
        <button onClick={() => handleTabChange('notes')}>Quick Notes</button>
      </div>
      {activeTab === 'pomodoro' && <PomodoroTimer />}
      {activeTab === 'todo' && <ToDoList />}
      {activeTab === 'notes' && <QuickNotes />}
    </div>
  );
}

export default App;
