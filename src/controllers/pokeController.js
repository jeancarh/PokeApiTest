const utils = require('../utils/utils');
const axios = require('axios');
require('dotenv').config()

// Example controller methods for Get All pokemons
exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await axios.get(process.env.POKE_API);
    return res.status(200).json(pokemons.data);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

