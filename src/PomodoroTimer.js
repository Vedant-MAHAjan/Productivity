import React, { Component } from 'react';
import './PomodoroTimer.css';
import { useToasts } from 'react-toast-notifications';

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

    showExerciseSuggestion = () => {
        const { addToast } = this.props; // Use the addToast function from props
        const suggestion = "Time for a quick exercise break!\nStretch, walk, or do some jumping jacks.";

        addToast(suggestion, { appearance: 'info' }); // Show a toast message
    };

    // tick = () => {
    //     if (this.state.time > 0) {
    //         this.setState({ time: this.state.time - 1500 });
    //     } else {
    //         this.pauseTimer();
    //         this.showExerciseSuggestion();
    //     }
    // };

    // tick = () => {
    //     if (this.state.time > 0) {
    //       this.setState({ time: this.state.time - 1500 });
    //     } else {
    //       this.pauseTimer();
    //       // Save completed session to localStorage
    //       const completedSession = {
    //         workTime: 1500, // Assuming 25 minutes for Pomodoro session
    //         // You can add more details if needed
    //       };
    //       const sessions = JSON.parse(localStorage.getItem('pomodoroSessions')) || [];
    //       sessions.push(completedSession);
    //       localStorage.setItem('pomodoroSessions', JSON.stringify(sessions));
    
    //       // Show exercise suggestion
    //       this.showExerciseSuggestion();
    //     }
    //   }

      tick = () => {
        if (this.state.time > 0) {
            this.setState({ time: this.state.time - 1 }); //MAKE CHANGES HERE TO MAKE IT 1500 SECOND
        } else {
            this.pauseTimer();
            this.showExerciseSuggestion();
            this.updateFocusedWorkTime(); // Call the function to update focused work time
        }
    };

    updateFocusedWorkTime = () => {
        // Update focused work time by adding 25 minutes (1500 seconds)
        this.setState((prevState) => ({
            focusedWorkTime: prevState.focusedWorkTime + 1500,
        }));
        // Increment Pomodoro sessions count
        const sessions = localStorage.getItem('pomodoroSessions');
        localStorage.setItem('pomodoroSessions', sessions ? parseInt(sessions) + 1 : 1);
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

export default function PomodoroTimerWithToast(props) {
    const { addToast } = useToasts(); // Use the useToasts hook

    return <PomodoroTimer {...props} addToast={addToast} />;
}

