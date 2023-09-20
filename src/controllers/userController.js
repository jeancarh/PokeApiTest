const User = require('../models/userModels');
const utils = require('../utils/utils');
const jwt = require('jsonwebtoken');
require('dotenv').config()
// Example controller methods
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//creating user
exports.createUser = async (req, res) => {
  if(req.body.username === undefined || req.body.username === ''){
    return res.status(400).json({ error: 'username is missing', type: 'USERNAME_MISSING'});
  }
  if(req.body.password === undefined || req.body.password === ''){
    return res.status(400).json({ error: 'password is missing' , type: 'PASSWORD_MISSING'});
  }
  const user = await getUser(req.body.username)
  if(user){
    return res.status(400).json({ error: `username ${user.username} already exist` , type: 'USER_EXIST'});
  }
  try {
    req.body.password = await utils.encodePassword(req.body.password)
    const newUser = await User.create(req.body)
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//creating login session with jwt also
exports.login = async (req, res) => {
  if(req.body.username === undefined || req.body.username === ''){
    return res.status(400).json({ error: 'username is missing', type: 'USERNAME_MISSING'});
  }
  if(req.body.password === undefined || req.body.password === ''){
    return res.status(400).json({ error: 'password is missing' , type: 'PASSWORD_MISSING'});
  }
  try {
    const user = await getUser(req.body.username)
    const eqPasswords = await utils.comparePassword(req.body.password, user.password)
    if(!eqPasswords){
      return res.status(500).json({ error: 'Password does not match' });
    }
    const token = await generateToken(user)
    return res.status(200).json({user: user, token: token});
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

//adding favorites pokemos into db
exports.addFavorites = async (req, res) => {
  if(req.body.username === undefined || req.body.username === ''){
    return res.status(400).json({ error: 'username is missing', type: 'USERNAME_MISSING'});
  }

  if(req.body.favorites === undefined || req.body.favorites.lenght === 0){
    return res.status(400).json({ error: 'password is missing' , type: 'PASSWORD_MISSING'});
  }

  try {
    const myquery = { username: req.body.username };
    const newvalues = { $set: {favorites: req.body.favorites}}
    await User.updateOne(myquery,newvalues)
    res.status(201).json({message: 'Row Updated Succesfully'});
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

//get your favorites pokemons from db
exports.getFavorites = async (req, res) => {
  try {
    if(req.query.id === undefined || req.query.id === ''){
      res.status(400).json({ error: 'query param id is missing' });
    }
    const myquery = { _id: req.query.id };
    const user = await User.findOne(myquery)
    res.status(201).json(user.favorites);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

//get user from db
async function getUser(username){
 const user = await User.findOne({ username: username}) 
 if (user) {
 return user
}
}

//generating jwt
async function generateToken(user){
  const plainObject = { ...user };
  const token = await jwt.sign(plainObject, process.env.JWTKEY, { expiresIn: process.env.TOKEN_EXPIRATION });
  return token;
}