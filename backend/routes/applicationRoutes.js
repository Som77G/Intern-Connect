const express=require("express");
const router= express.Router();
const {getAllApplications, jobseekerGetAllApplications, jobseekerDeleteApplication, postApplication}= require("../controllers/applicationController");
const {requireAuth}= require("../middleware/requireAuth");

const multer= require('multer');
const storage= multer.memoryStorage();

//middleware
const upload= multer({
    storage: storage
})
router.use(requireAuth);

router.get("/getAllApplications", getAllApplications);
router.get("/jobseekerGetAllApplications", jobseekerGetAllApplications);
router.post("/postApplication", upload.fields([
    {name: 'application', maxCount:1}
]),postApplication);
router.delete("/jobseekerDeleteApplication/:id", jobseekerDeleteApplication);
module.exports= router;