import React, { useState, useEffect } from 'react';

function Board() {
    const [deck, setDeck] = useState([]);
    const [diffuseCardCount, setDiffuseCardCount] = useState(0);
    const [currentCard, setCurrentCard] = useState(null);
    const [cardIsShowing, setCardIsShowing] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        const initializeDeck = () => {
            const cards = [
                { cardName: 'Cat card', cardTitle: 'first title' },
                { cardName: 'Defuse card', cardTitle: 'second title' },
                { cardName: 'Shuffle card', cardTitle: 'third title' },
                { cardName: 'Exploding kitten card', cardTitle: 'forth title' }
            ];
            
            const tempDeck = [];

            const getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            for (let i = 0; i < 5; i++) {
                tempDeck.push(cards[getRandomInt(0, cards.length - 1)]);
            }

            setDeck(tempDeck);
        }

        initializeDeck();
    }, []);

    const handleCardShow = () => {
        const tempDeck = [...deck];
        const currCard = tempDeck[tempDeck.length - 1];
        setCurrentCard(currCard);
        setCardIsShowing(true);

        setTimeout(() => {
            // Handle logic for showing the card
        }, 2500);
    }

    return (
        <div className='board'>
            <h1>Board</h1>
            <div className="container">
                <div className='card-cont'>
                    {/* Rendering deck of cards */}
                    {deck.map((card, ind) => (
                        <div key={ind} className={`card card-${ind + 1}`}>
                            card {ind}
                        </div>
                    ))}
                </div>

                {/* Rendering current card if present */}
                {currentCard && (
                    <div className='card active-card'>
                        {currentCard.cardName}
                    </div>
                )}

                {/* Button to show the next card */}
                {!cardIsShowing && (
                    <button className='show-btn' onClick={handleCardShow}>
                        Show Card
                    </button>
                )}

                {/* Displaying diffuse card count */}
                <h2>Diffuse Cards Available - {diffuseCardCount}</h2>
            </div>
        </div>
    );
}

export default Board;
