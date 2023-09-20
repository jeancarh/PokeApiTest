const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokeController');

// Define your routes here
router.get('/', pokeController.getAllPokemons);

module.exports = router;