const express= require("express")
const router= express.Router();
const {addStudent}= require("../controllers/adminController")
//adding a student 
const {requireAuth} = require('../middleware/requireAuth')

router.use(requireAuth)
router.post("/addstudent", addStudent);
module.exports= router