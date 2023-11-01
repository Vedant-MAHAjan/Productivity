import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        const storedTasks = localStorage.getItem('tasks');
        const storedCompletedTasks = localStorage.getItem('completedTasks');

        this.state = {
            task: '',
            tasks: storedTasks ? JSON.parse(storedTasks) : [], // Retrieve tasks from local storage
            completedTasks: storedCompletedTasks ? JSON.parse(storedCompletedTasks) : [], // Retrieve completed tasks
        };
    }

    handleTaskChange = (event) => {
        this.setState({ task: event.target.value });
    };
    // ... (rest of the component)

    addTask = () => {
        if (this.state.task.trim() !== '') {
            this.setState(
                (prevState) => ({
                    tasks: [...prevState.tasks, this.state.task],
                    task: '',
                }),
                () => {
                    localStorage.setItem('tasks', JSON.stringify(this.state.tasks)); // Store updated tasks
                }
            );
        }
    };

    removeTask = (index) => {
        this.setState(
            (prevState) => ({
                tasks: prevState.tasks.filter((_, i) => i !== index),
            }),
            () => {
                localStorage.setItem('tasks', JSON.stringify(this.state.tasks)); // Update and store the remaining tasks
            }
        );
    };

    clearAllTasks = () => {
        this.setState({ tasks: [] }, () => {
            localStorage.removeItem('tasks'); // Remove all tasks from local storage
        });
    };

    markAsCompleted = (index) => {
        const { completedTasks } = this.state;

        if (!completedTasks.includes(index)) {
            this.setState(
                (prevState) => ({
                    completedTasks: [...prevState.completedTasks, index],
                }),
                () => {
                    localStorage.setItem('completedTasks', JSON.stringify(this.state.completedTasks)); // Update and store completed tasks
                }
            );
        }
    }

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
    // ... (rest of the component)


export default ToDoList;
