const express = require('express');
const bodyParser = require('body-parser');
const contestRoutes = require('./routes/contestRoutes');
const userRoutes = require('./routes/userRoutes');
const database = require('./config/database');

const app = express();

// Connect to the database
database();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contests', contestRoutes);
app.use('/api/users', userRoutes);

module.exports = app;