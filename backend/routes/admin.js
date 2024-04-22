const express= require("express")
const router= express.Router();
const {addStudent}= require("../controllers/adminController")
//adding a student 

router.post("/addstudent", addStudent);
module.exports= router