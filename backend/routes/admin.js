const express= require("express")
const router= express.Router();
const {addStudent, deductCredit}= require("../controllers/adminController")
//adding a student 
const {requireAuth} = require('../middleware/requireAuth')

router.use(requireAuth)
router.post("/addstudent", addStudent);
router.put("/deductcredit", deductCredit);
module.exports= router