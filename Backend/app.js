const express = require("express");
const userRoute = require("./routes/userRoute");
require("dotenv").config();
const connect = require("./config/db");
const PORT = process.env.PORT
const path = require("path");
const cors = require("cors");


connect();



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/api/v1", userRoute);


app.get("/", (req,res)=>{
  res.send(`Welcome to home`)


})




app.listen (PORT,()=>{
  console.log(`server runing on port no ${PORT}` )
})




