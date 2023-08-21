// PomodoroTimer.js

import React, { Component } from 'react';
import './App.css';

class quickNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 1500, // 25 minutes in seconds
            isRunning: false,
            task: '',
            tasks: [],
            quickNote: '',
        };

        this.timer = null;
    }

    // ... (previous code)

    handleQuickNoteChange = (event) => {
        this.setState({ quickNote: event.target.value });
    };

    addQuickNote = () => {
        if (this.state.quickNote.trim() !== '') {
            this.setState((prevState) => ({
                tasks: prevState.tasks,
                quickNote: '',
                tasks: [...prevState.tasks, this.state.quickNote],
            }));
        }
    };

    // ... (previous code)

    render() {
        // ... (previous JSX)

        return (
            <div className="pomodoro-timer">
                {/* ... (previous JSX) */}                
                <div className="quick-notes">
                    <h2>Quick Notes</h2>
                    <input
                        type="text"
                        value={this.state.quickNote}
                        onChange={this.handleQuickNoteChange}
                        placeholder="Enter a quick note"
                    />
                    <button onClick={this.addQuickNote} className="add-button">
                        Add Note
                    </button>
                    <ul>
                        {this.state.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default quickNotes;
