const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

// Get user profile route
router.get('/profile', userController.getProfile);

module.exports = router;