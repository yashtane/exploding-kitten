
**Exploding Kittens Card Game**
Welcome to the Exploding Kittens Card Game! This is a single-player online card game where you draw cards from a deck, hoping to avoid the dreaded exploding kitten while collecting other useful cards to help you survive.

**Table of Contents**
Features
Technologies Used
Installation
Usage
Frontend Setup
Backend Setup
Contributing

**Features**
Single-player card game
Deck of cards with various types: Cat, Defuse, Shuffle, Exploding Kitten
Win the game by drawing all cards without exploding kitten
Leaderboard to track the number of games won by users
**Technologies Used**
Backend: Node.js, Express.js, Redis

**Frontend: React, Redux**
**Database: Redis**
Other: npm, Axios

**Installation**
1. Clone this repository:
git clone <repository-url>

2. Navigate to the project directory:
cd exploding-kittens-card-game

3.Install backend dependencies:
cd backend
npm install
**Install frontend dependencies:**
cd ../frontend
npm install
**  Usage**
Start the backend server:
cd ../backend
npm start
Start the frontend server:
cd ../frontend
npm run dev
Open your browser and navigate to http://localhost:5173 to play the game.

**Backend Set**
Navigate to the backend directory:
cd backend
**Install backend dependencies:**
1. npm install
2. Set up environment variables:
3. Create a .env file in the backend directory.
4. Add the following environment variables:
makefile
PORT=5000
REDIS_URL=your_redis_url
**Start the backend server:**
npm start
Frontend Setup
Navigate to the frontend directory:
cd frontend

**Start the frontend server:**
npm run dev

