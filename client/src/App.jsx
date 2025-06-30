import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage'
import { useContext } from 'react';
import { GameContext } from './contexts/GameContext';

function App() {
  const {isLoggedIn} = useContext(GameContext)
  return (
    <div className='container'>
      {isLoggedIn?
      <GamePage />:
      <HomePage />
      }
    </div>

  );
}

export default App;