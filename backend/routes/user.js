const express= require("express");
const router= express.Router();
const {verifyEmail, login, resetPassword, logout}= require("../controllers/userController");

router.post("/verifyEmail", verifyEmail)
router.post("/login", login)
router.put("/resetPassword", resetPassword);
router.get("/logout", logout)
module.exports=  router;