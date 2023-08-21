// App.js

import React from 'react';
import './App.css';
import PomodoroTimer from './PomodoroTimer'; 
import ToDoList from './to-do';
import QuickNotes from './quickNotes';

function App() {
  return (
    <div className="App">
      <PomodoroTimer />
      <ToDoList />
      <QuickNotes />
    </div>
  );
}

export default App;
