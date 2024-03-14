import React, { useState } from 'react';
import Game from './Game';

function GameContainer() {
    // State variables for game over and game won
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    // Function to restart the game
    const restartGame = () => {
        // Logic for restarting the game
        setGameOver(false);
        setGameWon(false);
    }

    return (
        <>
            <Game
                gameOver={gameOver}
                gameWon={gameWon}
                restartGame={restartGame}
            />
        </>
    );
}

export default GameContainer;
