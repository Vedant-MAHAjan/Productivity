
import React, { Component } from 'react';
import './App.css'; // Make sure to adjust the path based on your project structure

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 1500, // 25 minutes in seconds
            isRunning: false,
            task: '',
            tasks: [],
        };

        this.timer = null;
    }

    // ... (previous code)

    handleTaskChange = (event) => {
        this.setState({ task: event.target.value });
    };

    addTask = () => {
        if (this.state.task.trim() !== '') {
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, this.state.task],
                task: '',
            }));
        }
    };

    removeTask = (index) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((_, i) => i !== index),
        }));
    };

    clearAllTasks = () => {
        this.setState({ tasks: [] });
    };


    render() {
        const { time, isRunning, task, tasks } = this.state;

        return (
            <div className="pomodoro-timer">
                {/* ... (previous JSX) */}
                <div className="tasks">
                    <h2>To-Do List</h2>
                    <input
                        type="text"
                        value={task}
                        onChange={this.handleTaskChange}
                        placeholder="Enter a task"
                    />
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => this.removeTask(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="button-container">
                        <button onClick={this.addTask} className="add-button">
                            Add Task
                        </button>
                        <button onClick={this.clearAllTasks} className="clear-button">
                            Clear All
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;
