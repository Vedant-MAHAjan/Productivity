// DistractionBlocker.js

import React, { useState } from 'react';

function DistractionBlocker() {
  const [blocking, setBlocking] = useState(false);

  // Function to toggle distraction-blocking mode
  const toggleBlocking = () => {
    setBlocking(!blocking);
    blockDistractingSites();
    // Implement code to block distracting websites or apps here
  };

// Function to block distracting websites or apps
const blockDistractingSites = () => {
    if (blocking) {
      // Replace these example websites with the ones you want to block
      const distractingWebsites = ['facebook.com', 'twitter.com', 'youtube.com'];
  
      for (var website of distractingWebsites) {
        window.location.href = `https://www.google.com/search?q=${website}`;
      }
    }
  };
  

  return (
    <div>
      <h2>Distraction Blocker</h2>
      <button onClick={toggleBlocking}>
        {blocking ? 'Deactivate Blocking' : 'Activate Blocking'}
      </button>
    </div>
  );
}

export default DistractionBlocker;
