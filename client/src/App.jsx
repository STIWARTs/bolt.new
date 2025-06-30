import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage'
import { useContext } from 'react';
import { GameContext } from './contexts/GameContext';

function App() {
  const {isLoggedIn} = useContext(GameContext)
  return (
    <div className='container'>
      {/* Floating animated elements */}
      <div className="floating-element pencil-1"></div>
      <div className="floating-element brush-1"></div>
      <div className="floating-element palette-1"></div>
      <div className="floating-element star-1"></div>
      <div className="floating-element star-2"></div>
      <div className="floating-element doodle-1"></div>
      
      {/* Floating bubbles */}
      <div className="floating-bubble bubble-1"></div>
      <div className="floating-bubble bubble-2"></div>
      <div className="floating-bubble bubble-3"></div>
      <div className="floating-bubble bubble-4"></div>
      
      {/* Color orbs */}
      <div className="color-orb orb-1"></div>
      <div className="color-orb orb-2"></div>
      <div className="color-orb orb-3"></div>
      
      {isLoggedIn?
      <GamePage />:
      <HomePage />
      }
    </div>
  );
}

export default App;