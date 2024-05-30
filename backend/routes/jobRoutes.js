const express= require('express');
const router= express.Router();
const {getAllJobs, postJob, updateJob, deleteJob}= require('../controllers/jobController')

const {requireAuth}= require('../middleware/requireAuth');

router.use(requireAuth);
router.get("/getAllJobs", getAllJobs);
router.post("/postJob", postJob);
router.put("/updateJob/:id", updateJob);
router.delete("/deleteJob/:id", deleteJob);
module.exports= router