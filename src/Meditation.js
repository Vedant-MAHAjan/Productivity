// Meditation.js

import React, { useState, useRef } from 'react';
import audioSessions from './data/audioSessions.json';



function Meditation() {
  const [currentSession, setCurrentSession] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playPauseToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const playNextSession = () => {
    if (currentSession < audioSessions.length - 1) {
      setCurrentSession(currentSession + 1);
    } else {
      setCurrentSession(0);
    }

    // Pause the audio when switching sessions
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="meditation">
      <h2>Meditation and Relaxation</h2>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + audioSessions[currentSession].audioSrc}></audio>
      <h3>{audioSessions[currentSession].title}</h3>
      <p>Duration: {audioSessions[currentSession].duration}</p>
      <button onClick={playPauseToggle}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={playNextSession}>Next</button>
    </div>
  );
}

export default Meditation;
