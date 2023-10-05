import React, { Component } from 'react';
import './PomodoroTimer.css';


class PomodoroTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 1500, // 25 minutes in seconds
            isRunning: false,
            isBreakTime: false, // Added state to track break time

        };

        this.timer = null;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    startTimer = () => {
        this.setState({ isRunning: true });
        this.timer = setInterval(this.tick, 1000);
    };

    pauseTimer = () => {
        this.setState({ isRunning: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({ time: 1500, isRunning: false });
        clearInterval(this.timer);
    };

    tick = () => {
        if (this.state.time > 0) {
            this.setState({ time: this.state.time - 1 });
        } else {
            this.pauseTimer();
        }
    };

    startBreakTimer = () => {
        this.setState({ time: 300, isRunning: true, isBreakTime: true }); // 5 minutes in seconds
        this.timer = setInterval(this.tick, 1000);
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

export default PomodoroTimer;
