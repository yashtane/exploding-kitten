import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Highscore from './Highscore'; // Import Highscore component
import GameManagement from './GameManagement'; // Import GameManagement component

function Game({ highscore,dispatch, updateScore }) {
    // Function to restart the game
    const restartGame = () => {
        // Logic for restarting the game
    }

    return (
      <div>
            <Navbar /> {/* Render the Navbar component */}
            {/* Conditional rendering based on game state */}
            {gameWon ? (
                <div>
                    <h1>You Won</h1>
                    <button onClick={restartGame}>Restart</button>
                </div>
            ) : (
                gameOver ? (
                    <div>
                        <h1>Game Over</h1>
                        <button onClick={restartGame}>Restart</button>
                    </div>
                ) : (
                    <div className='board'>
                        <div className="container">
                            {/* Render game board content (deck of cards, current card) */}
                        </div>
                        <Highscore highscore={highscore} /> {/* Render the Highscore component */}
                    </div>
                )
            )}
            {/* Render the GameManagement component */}
            <GameManagement
                highscore={highscore}
                dispatch={dispatch}
                updateScore={updateScore}
            />
        </div>
    );
}

export default Game;
