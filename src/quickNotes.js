import React, { Component } from 'react';
import './QuickNotes.css';

class quickNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quickNote: '',
            tasks: [],
        };

        this.timer = null;
    }

    componentDidMount() {
        const storedNotes = localStorage.getItem('quickNotes');
        if (storedNotes) {
            this.setState({
                tasks: JSON.parse(storedNotes),
            });
        }
    }

    handleQuickNoteChange = (event) => {
        this.setState({ quickNote: event.target.value });
    };

    addQuickNote = () => {
        if (this.state.quickNote.trim() !== '') {
            this.setState(
                (prevState) => ({
                    quickNote: '',
                    tasks: [...prevState.tasks, this.state.quickNote],
                }),
                () => {
                    localStorage.setItem('quickNotes', JSON.stringify(this.state.tasks)); // Store updated quick notes
                }
            );
        }
    };

    render() {
        return (
            <div className="quick-notes">
                <h2 className="notes-title">Quick Notes</h2>
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
        );
    }
}

export default quickNotes;
