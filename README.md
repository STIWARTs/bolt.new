# Dash & Draw – Built for the Bolt Hackathon

A real-time, multiplayer drawing and guessing game inspired by Skribbl.io. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication.

## 📱 Application Preview

<div align="center">
  <table>
    <tr>
      <td><strong>Home Page</strong></td>
      <td><strong>Product Collections</strong></td>
      <td><strong>AI Assistant</strong></td>
    </tr>
    <tr>
      <td><img src="/client/public/assets/home.png" alt="img" width="250"/></td>
      <td><img src="/client/public/assets/draw2.png" alt="img" width="250"/></td>
      <td><img src="/client/public/assets/draw.png" alt="img" width="250"/></td>
    </tr>
  </table>
</div>

---

## 🏗️ Complete Folder Structure

```
skribbl-clone-main/
│
├── client/                        # React frontend
│   ├── index.html                 # Main HTML file
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite config for React
│   ├── public/
│   │   └── assets/
│   │       └── pencil.png         # Cursor image for drawing
│   └── src/
│       ├── App.jsx                # Root React component
│       ├── App.scss               # Global styles
│       ├── index.scss             # Main SCSS entry
│       ├── main.jsx               # React entry point
│       ├── assets/                # Game images (logo, backgrounds, etc.)
│       ├── data/                  # Static data (avatars, colors)
│       │   ├── avatar.js
│       │   └── colors.js
│       ├── contexts/              # React Contexts for state management
│       │   ├── CanvasContext.jsx  # Canvas state (drawing, color, brush)
│       │   └── GameContext.jsx    # Game state (players, chat, round, etc.)
│       ├── components/            # Reusable UI components
│       │   ├── Canvas/            # Drawing canvas
│       │   │   ├── Canvas.jsx
│       │   │   └── canvas.styles.scss
│       │   ├── Chat/              # Chat/guessing box
│       │   │   ├── Chat.jsx
│       │   │   └── chat.styles.scss
│       │   ├── Clock/             # Timer display
│       │   │   ├── Clock.jsx
│       │   │   └── clock.scss
│       │   ├── Modal/             # Game state modals (waiting, choose word, results)
│       │   │   ├── Modal.jsx
│       │   │   └── modal.styles.scss
│       │   ├── Palette/           # Color/brush palette
│       │   │   ├── Palette.jsx
│       │   │   └── palette.style.scss
│       │   ├── Player/            # Single player display
│       │   │   ├── Player.jsx
│       │   │   └── player.styles.scss
│       │   ├── PlayerList/        # List of all players
│       │   │   ├── PlayerList.jsx
│       │   │   └── player-list.styles.scss
│       │   └── Word/              # Word to guess display
│       │       ├── Word.jsx
│       │       └── word.scss
│       └── pages/                 # Main pages
│           ├── HomePage/          # Join game, avatar selection
│           │   ├── HomePage.jsx
│           │   └── homepage.scss
│           └── GamePage/          # Main game UI
│               ├── GamePage.jsx
│               └── game-page.styles.scss
│
├── server/                        # Node.js backend
│   ├── config/                    # Game logic modules
│   │   ├── game.js                # Game state and logic
│   │   ├── player.js              # Player model
│   │   └── words.js               # Word list
│   ├── index.js                   # Main server (Express, Socket.IO)
│   ├── package.json               # Backend dependencies
│   └── .gitignore
│
├── README.md                      # Project documentation
└── package-lock.json
```

---

## ⚙️ How the Game Works

### 1. User Flow

- **Home Page**:  
  Players enter their name and customize their avatar. When ready, they join the game lobby.

- **Lobby**:  
  Players wait for at least two players to join. The game starts automatically.

- **Game Rounds**:  
  - One player is chosen as the "drawer" and picks a word from three options.
  - The drawer draws the word on the canvas.
  - Other players ("guessers") try to guess the word in the chat.
  - The faster you guess, the more points you earn.

- **Scoring**:  
  - Guessers earn points for correct guesses.
  - The drawer earns points for each correct guess.
  - Scores are updated live.

- **Next Rounds & Game End**:  
  - After each round, the drawer rotates.
  - The game continues for a set number of rounds.
  - The player with the highest score at the end wins.

---

### 2. Real-Time Features

- **Socket.IO** is used for:
  - Broadcasting canvas drawing events to all players.
  - Sending/receiving chat messages instantly.
  - Updating player list, scores, and game state in real-time.

---

### 3. Key Code Components

- **Frontend (React)**
  - `GameContext.jsx`: Manages game state, player info, chat, and socket events.
  - `CanvasContext.jsx`: Manages drawing state, brush, color, and canvas events.
  - `HomePage.jsx`: Handles user login and avatar selection.
  - `GamePage.jsx`: Main game UI, listens to socket events, and renders all game components.
  - `Canvas.jsx`: Drawing area, emits drawing events to server.
  - `Chat.jsx`: Chat box for guessing words.
  - `PlayerList.jsx` & `Player.jsx`: Display all players and their scores.
  - `Word.jsx`: Shows the word to guess (or blanks).
  - `Modal.jsx`: Shows modals for waiting, word selection, round results, and game over.

- **Backend (Node.js/Express)**
  - `index.js`: Sets up Express server and Socket.IO, manages all real-time game logic (player join, drawing, guessing, scoring, round management).
  - `config/game.js`: Game state and logic (rounds, turns, word selection, scoring).
  - `config/player.js`: Player model and state.
  - `config/words.js`: List of possible words to draw.

---

### 4. How Real-Time Drawing & Guessing Works

- When the drawer draws, mouse events are sent to the server via Socket.IO.
- The server broadcasts these events to all other clients, updating their canvases in real-time.
- When a guesser sends a chat message, it's checked by the server:
  - If correct, the guesser and drawer are awarded points.
  - If incorrect, the message is just broadcast to others.
- The server manages rounds, timers, and word selection, ensuring all clients stay in sync.

---

## 🚀 Getting Started

1. **Install dependencies**  
   In both `client/` and `server/` folders:
   ```
   npm install
   ```

2. **Start the backend**
   ```
   cd server
   npm start
   ```

3. **Start the frontend**
   ```
   cd client
   npm run dev
   ```

4. **Open your browser**  
   Visit [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## 📝 Customization

- **UI/UX**: All UI components are in `client/src/components/` and styled with SCSS.  
  You can modernize the look by editing these files.
- **Game Logic**: Modify backend logic in `server/` and frontend logic in `client/src/contexts/` and `client/src/pages/`.

---

## 🤝 Contributing

Feel free to fork, customize, and improve the game!

---

## 📄 License

MIT
