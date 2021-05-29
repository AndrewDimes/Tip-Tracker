const Job = require('../models/job');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    createJob
};

async function createJob(req, res){
    const job = new Job({ ...req.body });
    try {
        await job.save();
        const token = createJWT(user); // user is the payload so this is the object in our jwt
        res.json({ token });
      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }
}