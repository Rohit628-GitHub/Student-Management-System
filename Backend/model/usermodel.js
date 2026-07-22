const mongoose = require('mongoose');

const userschama = new mongoose.Schema({
  
  name : String,
  email : String,
  password: String,
  
 

})

const usermodel = mongoose.model("user1", userschama);

module.exports = usermodel;
