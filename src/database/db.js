const mongoose = require('mongoose');
require('dotenv').config()

const dbURI = process.env.MONGO_URI;

//creating connection in app.js
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 async function makeConn(){
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
}
//Exporting method to create connection in app.js
module.exports = makeConn;
