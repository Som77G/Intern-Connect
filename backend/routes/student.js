const express= require("express");
const router= express.Router();
const {dashboard}= require("../controllers/studentController")
router.get("/dashboard", dashboard);
module.exports=router;