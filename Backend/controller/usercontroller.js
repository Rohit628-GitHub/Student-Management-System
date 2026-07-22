const express = require("express")
const usermodel = require("../model/usermodel");
const Studentmodel = require("../model/stusystem");


const createUser =async (req,res)=>{
  try {
    const user = await usermodel.create(req.body);
    res.status(200).json({
      message :"user created successfully",
      user,
    });

  }
  catch(e){
    res.status(400).json({
      message : "error creating user"
    })
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
  await uStudentmodel.findByIdAndUpdate(req.params.id, req.body);
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








    module.exports = {createUser,getAllUser,getUserById,deleteUser,updateUser,createStudent,getAllStudent,getStudentById,deleteStudent,updateStudent}

  




    