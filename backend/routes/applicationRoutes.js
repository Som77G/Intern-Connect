const express=require("express");
const router= express.Router();
const {getAllApplications, jobseekerGetAllApplications, jobseekerDeleteApplication, postApplication}= require("../controllers/applicationController");
const {requireAuth}= require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/getAllApplications", getAllApplications);
router.get("/jobseekerGetAllApplications", jobseekerGetAllApplications);
router.post("/postApplication", postApplication);
router.delete("/jobseekerDeleteApplication/:id", jobseekerDeleteApplication);
module.exports= router;