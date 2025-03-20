import { useEffect, useState } from "react";
import "./App.css";

function InaugurationPage() {
  const [loaded, setLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState("Welcome to Innoverse Hackfest!");
  const [countdown, setCountdown] = useState("24:00:00");
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    // Glitch effect for the title
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const originalText = "Welcome to Innoverse Hackfest!";
        let glitched = "";
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.9) {
            glitched += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          } else {
            glitched += originalText[i];
          }
        }
        setGlitchText(glitched);
        
        // Reset after a short delay
        setTimeout(() => {
          setGlitchText("Welcome to Innoverse Hackfest!");
        }, 200);
      }
    }, 2000);
    
    // Countdown timer functionality
    let totalSeconds = 10 * 60 * 60; // 24 hours in seconds
    
    const countdownInterval = setInterval(() => {
      totalSeconds -= 1;
      
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        setCountdown("00:00:00");
        // Maybe trigger some action when countdown ends
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
      clearInterval(glitchInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="inauguration-page">

      <div className={`matrix-background ${loaded ? 'active' : ''}`}></div>
      
      <div className={`inauguration-content ${loaded ? 'loaded' : ''}`}>
        <img src="/innoverse-logo.png" alt="Innoverse Logo" className="innoverse-logo" />
        <h1 className="hacker-title glitch" data-text="Welcome to Innoverse Hackfest!">
          {glitchText}
        </h1>
        
        <div className="hackfest-info">
          <div className="blink-text">SYSTEM STATUS: ONLINE</div>
          <p className="info-text">We are thrilled to have you here for 24 hours of innovation and creativity!</p>
          
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">hackfest_details.sh</div>
            </div>
            <div className="terminal-content">
              <p>$ ./hackfest_details.sh</p>
              <p> Event duration: 24 hours</p>
              <p> Participants: All hackers connected</p>
              <p> Mission: Build, innovate, disrupt</p>
              <p> Status: Systems operational</p>
              <p> Ready to begin? Y/N</p>
              <p>$ Y</p>
              <p className="blink-cursor"> Hackfest initiated. Good luck!</p>
            </div>
          </div>
        </div>

        
        <div className="hackfest-countdown">
          <h2 className="countdown-title">HACKATHON COUNTDOWN</h2>
          <div className="countdown-timer">{countdown}</div>
          <p>Your time starts now. Make it count.</p>
        </div>
        
        
      </div>
    </div>
  );
}

export default InaugurationPage;