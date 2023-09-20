const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your routes here
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/favorites', userController.addFavorites);
router.get('/favorites', userController.getFavorites);
router.post('/login', userController.login);

// Add more routes as needed

module.exports = router;