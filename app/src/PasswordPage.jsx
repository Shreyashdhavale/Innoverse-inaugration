import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import backgroundGif from "../public/Binary.gif"; // Replace with your actual GIF path

function PasswordPage() {
  const [password, setPassword] = useState("");
  const [terminalText, setTerminalText] = useState("");
  const navigate = useNavigate();
  
  const correctPassword = "innoverse2025";
  
  // Simulated terminal text effect
  useEffect(() => {
    const texts = [
      "Initializing secure connection...",
      "Establishing encrypted channel...",
      "Connecting to Innoverse network...",
      "Access verification required...",
      "Enter security credentials to proceed..."
    ];
    
    let currentIndex = 0;
    let charIndex = 0;
    let currentText = "";
    
    const typingInterval = setInterval(() => {
      if (currentIndex < texts.length) {
        if (charIndex < texts[currentIndex].length) {
          currentText += texts[currentIndex][charIndex];
          setTerminalText(currentText);
          charIndex++;
        } else {
          currentText += "\n> ";
          setTerminalText(currentText);
          currentIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTerminalText(prev => prev + "\nVerifying credentials...");
    
    setTimeout(() => {
      if (password === correctPassword) {
        setTerminalText(prev => prev + "\nAccess granted. Initializing Innoverse Hackfest...");
        setTimeout(() => navigate("/transition"), 1500);
      } else {
        setTerminalText(prev => prev + "\nAccess denied. Invalid security credentials.");
        setPassword("");
      }
    }, 1000);
  };

  return (
    <div className="password-page" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">INNOVERSE_HACKFEST.exe</div>
          <div className="terminal-buttons">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
          </div>
        </div>
        <div className="terminal-body">
          <pre className="terminal-text">{terminalText}</pre>
          <form onSubmit={handleSubmit} className="password-form">
            <div className="input-line">
              <span className="prompt">$</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTER ACCESS CODE"
                className="terminal-input"
                required
              />
            </div>
            <button type="submit" className="hidden-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordPage;