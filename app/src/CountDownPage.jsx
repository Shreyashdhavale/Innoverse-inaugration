import { useEffect, useState } from "react";
import "./App.css";

function CountdownPage() {
  const [loaded, setLoaded] = useState(false);
  const [countdown, setCountdown] = useState("24:00:00");
  const [visitorCount, setVisitorCount] = useState(250); // Fixed initial value that you can change manually
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    // Countdown timer functionality
    let totalSeconds = 24 * 60 * 60; // 24 hours in seconds
    
    const countdownInterval = setInterval(() => {
      totalSeconds -= 1;
      
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        setCountdown("00:00:00");
      } else {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        setCountdown(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }
    }, 1000);
    
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="countdown-page">
      <div className={`matrix-background ${loaded ? 'active' : ''}`}></div>
      
      <div className={`countdown-content ${loaded ? 'loaded' : ''}`}>
        <div className="visitor-counter-section">
          <h1 className="hacker-title glitch" data-text="Innoverse Hackfest Stats">
            Innoverse Hackfest Stats
          </h1>
          
          <div className="stats-container">
            <div className="stat-card">
              <h2 className="stat-title">ACTIVE HACKERS</h2>
              <div className="stat-value">{visitorCount}</div>
              <div className="stat-description blink-text">CONNECTED</div>
            </div>
            
            <div className="stat-card-countdown">
              <h2 className="stat-title">HACKATHON COUNTDOWN</h2>
              <div className="stat-value countdown-timer">{countdown}</div>
              <div className="stat-description">REMAINING TIME</div>
            </div>
            
            <div className="stat-card">
              <h2 className="stat-title">SYSTEM LOAD</h2>
              <div className="stat-value">{Math.floor(visitorCount / 10)}%</div>
              <div className="stat-description">SERVER CAPACITY</div>
            </div>
          </div>
          
          <div className="terminal-window visitor-terminal">
            <div className="terminal-header">
              <div className="terminal-title">visitor_tracker.log</div>
            </div>
            <div className="terminal-content">
              <p>$ tail -f visitor_tracker.log</p>
              <p> [INFO] Session started: {new Date().toISOString()}</p>
              <p> [INFO] Visitor count initialized: {visitorCount}</p>
              <p> [INFO] Active connections: {Math.floor(visitorCount * 0.82)}</p>
              <p> [INFO] Idle connections: {Math.floor(visitorCount * 0.18)}</p>
              <p> [STATUS] All systems running optimally</p>
              <p className="blink-cursor"> Monitoring active...</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default CountdownPage;