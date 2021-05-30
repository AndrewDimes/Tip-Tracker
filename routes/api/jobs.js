const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

/*---------- Public Routes ----------*/
router.post('/createJob', jobsCtrl.createJob);
router.get('/getJobs', jobsCtrl.getJobs)

/*---------- Protected Routes ----------*/




module.exports = router;