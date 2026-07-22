const mongoose = require('mongoose');

const stuserschama = new mongoose.Schema({
  
  student_id : String,
  name: String,
  email : String,
  course : String,
  semester : String,


  
 

})

const stusermodel = mongoose.model("Students", stuserschama);

module.exports = stusermodel;
