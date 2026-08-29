const express = require("express")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usermodel = require("../model/usermodel");
const Studentmodel = require("../model/stusystem");

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

const createUser =async (req,res)=>{
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "name, email and password are all required",
      });
    }

    const existing = await usermodel.findOne({ email });
    if (existing) {
      return res.status(409).json({
        message: "An account with that email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usermodel.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      message :"user created successfully",
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });

  }
  catch(e){
    res.status(400).json({
      message : "error creating user"
    })
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({
       id: user._id 
      }, 
      JWT_SECRET, 
      { expiresIn: "7d" });

    res.status(200).json({
      message: "login successful",
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (e) {
    res.status(500).json({
      message: "error logging in",
    });
  }
};


const getAllUser =async (req,res)=>{
  try {
    const user = await usermodel.find();
    res.status(200).json({
      message :"user fetched successfully",
      user,
    });

  }
  catch(e){
    res.status(500).json({
      message : "can't fetch user"
    })
  }
};


const getUserById = async (req,res)=>{

  try{

  const data = await usermodel.findById(req.params.id);
  res.status(200).json({
      message :"user fetched successfully",
      data
    });

  }
  catch(e){
    
      res.status(500).json({
      message : "can't fetch user"
    })
    ;
  }


  
};



const deleteUser = async (req,res)=>{
  try{

  let data=await usermodel.findByIdAndDelete(req.params.id);
  res.status(200).json({
      message :"user deleted successfully",
      data,
    });
  }
  catch(e){
  
      res.status(500).json({
      message : "can't delete user"
    })
;
  }



  
};


const updateUser = async (req,res)=>{
try{
  await usermodel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send(await usermodel.findById(req.params.id));
}
catch(e){
  console.log(
    res.status(500).json({
    message : "can't update user"
  })
  );
}
    };










// users Data 





const createStudent =async (req,res)=>{
  try {
    const user = await Studentmodel.create(req.body);
    res.status(200).json({
      message :"Student created successfully",
      user,
    });

  }
  catch(e){
    res.status(400).json({
      message : "error creating Student"
    })
  }
};


const getAllStudent =async (req,res)=>{
  try {
    const user = await Studentmodel.find();
    res.status(200).json({
      message :"Student fetched successfully",
      user,
    });

  }
  catch(e){
    res.status(500).json({
      message : "can't fetch Student"
    })
  }
};


const getStudentById = async (req,res)=>{

  try{

  const data = await Studentmodel.findById(req.params.id);
  res.status(200).json({
      message :"user fetched successfully",
      data
    });

  }
  catch(e){
    console.log(
      res.status(500).json({
      message : "can't fetch user"
    })
    );
  }


  
};



const deleteStudent = async (req,res)=>{
  try{

  let data=await Studentmodel.findByIdAndDelete(req.params.id);
  res.status(200).json({
      message :"Student deleted successfully",
      data,
    });
  }
  catch(e){
    console.log(
      res.status(500).json({
      message : "can't delete Student"
    })
    );
  }



  
};


const updateStudent = async (req,res)=>{
try{
  await Studentmodel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send(await Studentmodel.findById(req.params.id));
}
catch(e){
  console.log(
    res.status(500).json({
    message : "can't update Student"
  })
  );
}
    };








    module.exports = {createUser,loginUser,getAllUser,getUserById,deleteUser,updateUser,createStudent,getAllStudent,getStudentById,deleteStudent,updateStudent}

  




    