
import React, { Component } from 'react';
import './ToDoList.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            task: '',
            tasks: [],
            completedTasks: [], // New array to track completed tasks
        };        
    }

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

    markAsCompleted = (index) => {
        const { completedTasks } = this.state;

        if (!completedTasks.includes(index)) {
            this.setState((prevState) => ({
                completedTasks: [...prevState.completedTasks, index],
            }));
        }
    };

    render() {
        const { task, tasks, completedTasks } = this.state;

        return (
            <div className="tasks">
                <h2 className="title">To-Do List</h2>
                <input
                    type="text"
                    value={task}
                    onChange={this.handleTaskChange}
                    placeholder="Enter task"
                />
                <button className="add-button" onClick={this.addTask}>Add Task</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={completedTasks.includes(index) ? 'completed' : ''}>
                            {completedTasks.includes(index) ? (
                                <del>{task}</del>
                            ) : (
                                <>
                                    {task}
                                    <button onClick={() => this.markAsCompleted(index)}>
                                        <span role="img" aria-label="cross">
                                            ❌
                                        </span>
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <button onClick={this.clearAllTasks}>Clear All</button>
            </div>            
        );
    }
}

export default ToDoList;
