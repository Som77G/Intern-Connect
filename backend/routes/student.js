const express= require("express");
const router= express.Router();
const {dashboard}= require("../controllers/studentController")

const {requireAuth} = require('../middleware/requireAuth')

router.use(requireAuth)
router.get("/dashboard", dashboard);
module.exports=router;