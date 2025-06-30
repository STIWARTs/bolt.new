import "./homepage.scss";
import logo from "../../assets/logo.png";
import greaterThan from "../../assets/greater_than.png";
import lessThan from "../../assets/less_than.png";
import {
  hairStyles,
  clothingStyles,
  eyesStyles,
  mouthStyles,
} from "../../data/avatar";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";

const HomePage = () => {
  const { setUsername, username, setAvatar, setIsLoggedIn, setPlayersList, socket } = useContext(GameContext);
  useEffect(() => {
    socket.on("game_joined", () =>{
      setIsLoggedIn(true);
      socket.emit("game_joined")
    })
  },[])
  const [topType, setTopType] = useState(10);
  const [clotheType, setClotheType] = useState(0);
  const [eyeType, setEyeType] = useState(2);
  const [mouthType, setMouthType] = useState(0);
  const types = ["top", "eye", "mouth", "clothe"];
  
  const login = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      const avatar = {
        top: hairStyles[topType],
        eye: eyesStyles[eyeType],
        mouth: mouthStyles[mouthType],
        clothe: clothingStyles[clotheType],
      }
      setAvatar(avatar);
      socket.emit("join_game", { username, avatar})
    }
  };
  
  const decrementStyle = (type) => {
    if (type === types[0]) {
      setTopType((topType - 1 + hairStyles.length) % hairStyles.length);
    }
    if (type === types[1]) {
      setEyeType((eyeType - 1 + eyesStyles.length) % eyesStyles.length);
    }
    if (type === types[2]) {
      setMouthType((mouthType - 1 + mouthStyles.length) % mouthStyles.length);
    }
    if (type === types[3]) {
      setClotheType(
        (clotheType - 1 + clothingStyles.length) % clothingStyles.length
      );
    }
  };
  
  const incrementStyle = (type) => {
    if (type === types[0]) {
      setTopType((topType % hairStyles.length) + 1);
    }
    if (type === types[1]) {
      setEyeType((eyeType % eyesStyles.length) + 1);
    }
    if (type === types[2]) {
      setMouthType((mouthType % mouthStyles.length) + 1);
    }
    if (type === types[3]) {
      setClotheType((clotheType % clothingStyles.length) + 1);
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        {/* Header Section */}
        <div className="header-section">
          <div className="logo-container">
            <img src={logo} alt="Dash & Draw" className="logo-image" />
          </div>
          <div className="welcome-text">
            <h1>Welcome to Dash & Draw</h1>
            <p>Create your avatar and join the ultimate drawing experience</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-section">
          <form onSubmit={login} className="join-form">
            {/* Username Input */}
            <div className="input-section">
              <label htmlFor="username" className="input-label">
                Display Name
              </label>
              <div className="input-wrapper">
                <input
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your display name"
                  className="username-input"
                  maxLength={20}
                />
                <div className="input-border"></div>
              </div>
            </div>

            {/* Avatar Customization */}
            <div className="avatar-section">
              <h3 className="section-title">Customize Your Avatar</h3>
              
              <div className="avatar-display">
                <img
                  src={`https://avataaars.io/?topType=${hairStyles[topType]}&clotheType=${clothingStyles[clotheType]}&clotheColor=Black&eyeType=${eyesStyles[eyeType]}&mouthType=${mouthStyles[mouthType]}`}
                  alt="Your Avatar"
                  className="avatar-image"
                />
              </div>

              <div className="customization-controls">
                {/* Hair Style */}
                <div className="control-group">
                  <span className="control-label">Hair</span>
                  <div className="control-buttons">
                    <button 
                      type="button" 
                      className="control-btn prev"
                      onClick={() => decrementStyle("top")}
                      aria-label="Previous hair style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                    </button>
                    <button 
                      type="button" 
                      className="control-btn next"
                      onClick={() => incrementStyle("top")}
                      aria-label="Next hair style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Eyes */}
                <div className="control-group">
                  <span className="control-label">Eyes</span>
                  <div className="control-buttons">
                    <button 
                      type="button" 
                      className="control-btn prev"
                      onClick={() => decrementStyle("eye")}
                      aria-label="Previous eye style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                    </button>
                    <button 
                      type="button" 
                      className="control-btn next"
                      onClick={() => incrementStyle("eye")}
                      aria-label="Next eye style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mouth */}
                <div className="control-group">
                  <span className="control-label">Mouth</span>
                  <div className="control-buttons">
                    <button 
                      type="button" 
                      className="control-btn prev"
                      onClick={() => decrementStyle("mouth")}
                      aria-label="Previous mouth style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                    </button>
                    <button 
                      type="button" 
                      className="control-btn next"
                      onClick={() => incrementStyle("mouth")}
                      aria-label="Next mouth style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Clothing */}
                <div className="control-group">
                  <span className="control-label">Outfit</span>
                  <div className="control-buttons">
                    <button 
                      type="button" 
                      className="control-btn prev"
                      onClick={() => decrementStyle("clothe")}
                      aria-label="Previous clothing style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                    </button>
                    <button 
                      type="button" 
                      className="control-btn next"
                      onClick={() => incrementStyle("clothe")}
                      aria-label="Next clothing style"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Button */}
            <div className="join-section">
              <button type="submit" className="join-button" disabled={!username.trim()}>
                <span className="button-text">Join Game</span>
                <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <p>Ready to showcase your artistic skills?</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;