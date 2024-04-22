const express= require("express");
const router= express.Router();
const {verifyEmail, login, resetPassword}= require("../controllers/userController");

router.post("/verifyEmail", verifyEmail)
router.post("/login", login)
router.put("/resetPassword", resetPassword);
module.exports=  router;