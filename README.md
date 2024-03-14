Exploding Kittens Game
Welcome to the Exploding Kittens game! This is a web-based single-player card game built using React for the frontend and Go for the backend.

Setup Instructions

1. Frontend (React)
Clone the repository:

git clone <repository-url>

2. Navigate to the frontend directory:

cd frontend

3. Install dependencies:

npm install

  Backend (Go)

1. git clone <repository-url>

2. Navigate to the backend directory:

cd backend

3. Install dependencies:

go mod tidy
4. Install PostgreSQL and create a database for the project.

5. Update the database configuration in config/config.go with your database details.

   Running the Application
1. Frontend (React)
2. Navigate to the frontend directory.

3. Start the development server:
npm start
The application will be accessible at http://localhost:3000 by default.

  Backend (Go)
1. Navigate to the backend directory.

2. Build and run the application:
go build -o app
./app
The backend server will start running on port 8080 by default.

Usage
Open your web browser and navigate to http://localhost:3000.

Follow the on-screen instructions to play the Exploding Kittens game.



