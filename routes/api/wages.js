const express = require('express');
const router = express.Router();
const wagesCtrl = require('../../controllers/wages');

router.post('/getJob/:id/wages', wagesCtrl.create);
 
module.exports = router;