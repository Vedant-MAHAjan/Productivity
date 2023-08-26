// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/">Pomodoro Timer</Link>
            <Link to="/todo">To-Do List</Link>
            <Link to="/notes">Quick Notes</Link>
        </nav>
    );
}

export default Navigation;
