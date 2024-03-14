import React, { useState, useEffect } from 'react';

function Board() {
    // State to hold the deck of cards
    const [deck, setDeck] = useState([]);

    // Function to initialize the deck of cards
    const initializeDeck = () => {
        const cards = [
            { cardName: 'Cat card', cardTitle: 'first title' },
            { cardName: 'Defuse card', cardTitle: 'second title' },
            { cardName: 'Shuffle card', cardTitle: 'third title' },
            { cardName: 'Exploding kitten card', cardTitle: 'forth title' }
        ];
        const tempDeck = [];

        // Function to generate a random integer
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Fill the deck with 5 random cards
        for (let i = 0; i < 5; i++) {
            tempDeck.push(cards[getRandomInt(0, cards.length - 1)]);
        }

        return tempDeck;
    }

    // Initialize the deck when the component mounts
    useEffect(() => {
        const tempDeck = initializeDeck();
        setDeck(tempDeck);
    }, []);

    return (
        <div>
            <h1>Board</h1>
            {/* Render the deck of cards */}
            <div>
                {deck.map((card, index) => (
                    <div key={index}>
                        <p>{card.cardName}</p>
                        <p>{card.cardTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;
