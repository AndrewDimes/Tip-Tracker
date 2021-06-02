const express = require('express');
const router = express.Router();
const wagesCtrl = require('../../controllers/wages');

router.post('/createWage/:id/', wagesCtrl.createWage);
 
module.exports = router;