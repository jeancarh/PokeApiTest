const userModel = require('../models/userModels.js');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: String,
  favorites: [],
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
