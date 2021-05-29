const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

/*---------- Public Routes ----------*/
router.post('/createJob', jobsCtrl.createJob);

/*---------- Protected Routes ----------*/




module.exports = router;