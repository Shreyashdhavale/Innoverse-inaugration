import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function TransitionPage() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const navigate = useNavigate();
  const phrase = "LET'S BEGIN";

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Typing effect for the initial phrase
    let currentText = "";
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex < phrase.length) {
        currentText += phrase.charAt(charIndex);
        setText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Wait and then add text that looks like hacking is in progress
        setTimeout(() => {
          setText(currentText + "\n\nINITIALIZING SYSTEM...");
          
          setTimeout(() => {
            setText(currentText + "\n\nINITIALIZING SYSTEM...\nLOADING ENVIRONMENT...");
            
            setTimeout(() => {
              setText(currentText + "\n\nINITIALIZING SYSTEM...\nLOADING ENVIRONMENT...\nESTABLISHING SECURE CONNECTION...");
              
              setTimeout(() => {
                setText(currentText + "\n\nINITIALIZING SYSTEM...\nLOADING ENVIRONMENT...\nESTABLISHING SECURE CONNECTION...\nACCESS GRANTED!");
                
                // Navigate to inauguration page
                setTimeout(() => {
                  navigate("/inauguration");
                }, 1000);
              }, 800);
            }, 800);
          }, 800);
        }, 1000);
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [navigate]);

  return (
    <div className="transition-page">
      <div className="hacking-container">
        <pre className="hacking-text">
          {text}{showCursor ? "_" : ""}
        </pre>
      </div>
    </div>
  );
}

export default TransitionPage;