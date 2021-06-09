const express = require('express');
const router = express.Router();
const wagesCtrl = require('../../controllers/wages');

router.post('/createWage/:id/', wagesCtrl.createWage);
router.get('/getWages/:id/', wagesCtrl.getWages)
 
module.exports = router;