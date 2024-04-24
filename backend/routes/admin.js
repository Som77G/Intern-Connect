const express= require("express")
const router= express.Router();
const {addStudent, getAdmin}= require("../controllers/adminController")
//adding a student 

router.post("/addstudent", addStudent);
router.get("/getAdmin", getAdmin);
module.exports= router