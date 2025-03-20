# Contest Tracker Application

## Overview
The Contest Tracker is a real-time application designed to manage and display contests, providing users with live updates, detailed information, and a leaderboard. The application is built using React for the frontend and Node.js with Express for the backend.

## Features
- **Contest List**: View a list of ongoing and upcoming contests.
- **Contest Detail**: Get detailed information about a selected contest.
- **Leaderboard**: Display the leaderboard for contests in real-time.
- **Live Updates**: Receive real-time updates for ongoing contests using WebSocket.

## Project Structure
```
contest-tracker
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── ContestList.jsx
│   │   │   ├── ContestDetail.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   └── LiveUpdates.jsx
│   │   ├── hooks
│   │   │   └── useWebSocket.js
│   │   ├── context
│   │   │   └── ContestContext.jsx
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── package.json
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── contestController.js
│   │   │   └── userController.js
│   │   ├── models
│   │   │   ├── Contest.js
│   │   │   └── User.js
│   │   ├── routes
│   │   │   ├── contestRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── services
│   │   │   └── socketService.js
│   │   ├── config
│   │   │   └── database.js
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the `frontend` directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Navigate to the `backend` directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

## Running the Application
1. Start the backend server:
   ```
   cd backend
   node server.js
   ```
2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Usage
- Access the application in your web browser at `http://localhost:3000`.
- Interact with the contest list, view details, and see live updates.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.
