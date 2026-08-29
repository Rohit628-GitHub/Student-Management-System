const express = require("express");
const { createUser, loginUser, getAllUser, getUserById, deleteUser, updateUser,createStudent,getAllStudent,getStudentById,deleteStudent,updateStudent } = require("../controller/usercontroller");

const router = express.Router();

router.post("/user", createUser);
router.post("/login", loginUser);
router.get("/user", getAllUser);
router.get("/user/:id",getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);



// students


router.post("/student", createStudent);
router.get("/student", getAllStudent);
router.get("/student/:id", getStudentById);
router.delete("/student/:id", deleteStudent);
router.put("/student/:id", updateStudent);

module.exports = router;