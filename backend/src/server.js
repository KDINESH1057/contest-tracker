const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const port = process.env.PORT || 5000;
const { connectToDatabase } = require('./config/database');
const contestRoutes = require('./routes/contestRoutes');
const userRoutes = require('./routes/userRoutes');
const socketService = require('./services/socketService');

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json());
app.use('/api/contests', contestRoutes);
app.use('/api/users', userRoutes);

// Create HTTP server and integrate with Socket.io
const server = http.createServer(app);
const io = socketIo(server);

// Initialize socket service
socketService(io);

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});