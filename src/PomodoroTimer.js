import React, { Component } from 'react';
import './PomodoroTimer.css';
import { useToasts } from 'react-toast-notifications';

class PomodoroTimer extends Component {
    constructor(props) {
        super(props);

        const storedTime = localStorage.getItem('pomodoroTime');
        this.state = {
            time: storedTime ? parseInt(storedTime, 10) : 1500, // 25 minutes in seconds
            isRunning: false,
            isBreakTime: false, // Added state to track break time
        };

        this.timer = null;
    }

    componentDidMount() {
        if (this.state.isRunning) {
            this.timer = setInterval(this.tick, 1000);
        }
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    startTimer = () => {
        this.setState({ isRunning: true }, () => {
            this.timer = setInterval(this.tick, 1000);
            localStorage.setItem('pomodoroTime', this.state.time.toString());
        });
    };

    pauseTimer = () => {
        this.setState({ isRunning: false }, () => {
            clearInterval(this.timer);
            localStorage.setItem('pomodoroTime', this.state.time.toString());
        });
    };

    resetTimer = () => {
        this.setState({ time: 1500, isRunning: false }, () => {
            clearInterval(this.timer);
            localStorage.removeItem('pomodoroTime');
        });
    };

    showExerciseSuggestion = () => {
        const { addToast } = this.props;
        const suggestion = "Time for a quick exercise break!\nStretch, walk, or do some jumping jacks.";
        addToast(suggestion, { appearance: 'info' });
    };

    tick = () => {
        if (this.state.time > 0) {
            this.setState({ time: this.state.time - 1 });
        } else {
            this.pauseTimer();
            this.showExerciseSuggestion();
            this.updateFocusedWorkTime();
        }
    };

    updateFocusedWorkTime = () => {
        this.setState((prevState) => ({
            focusedWorkTime: prevState.focusedWorkTime + 1500,
        }));
        const sessions = localStorage.getItem('pomodoroSessions');
        localStorage.setItem('pomodoroSessions', sessions ? parseInt(sessions) + 1 : 1);
    };

    startBreakTimer = () => {
        this.setState({ time: 300, isRunning: true, isBreakTime: true }, () => {
            this.timer = setInterval(this.tick, 1000);
            localStorage.setItem('pomodoroTime', this.state.time.toString());
        });
    };

    render() {
        const { time, isRunning, isBreakTime } = this.state;

        return (
            <div className="pomodoro-timer">
                <h1 className="pomodoro-title">Pomodoro Timer</h1>
                <div className="timer">{this.formatTime(time)}</div>
                {isRunning && (
                    <div className="timer-text">
                        {isBreakTime ? 'Break Time!' : 'Time to focus'}
                    </div>
                )}
                <div className="buttons">
                    {!isRunning ? (
                        <button onClick={this.startTimer}>Start</button>
                    ) : (
                        <button onClick={this.pauseTimer}>Pause</button>
                    )}
                    <button onClick={this.startBreakTimer}>Break</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default function PomodoroTimerWithToast(props) {
    const { addToast } = useToasts();
    return <PomodoroTimer {...props} addToast={addToast} />;
}
