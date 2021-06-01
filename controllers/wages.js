const Job = require('../models/job');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    create
  };

  async function create(req, res) {
    const user = await User.findOne({ _id: req.user._id });
    const job = await Job.findById(req.params.id)
    try {
      job.wages.push(req.body)
      await job.save();
      const token = createJWT(user);
      res.json({ token })
    } catch (err) {
      // Probably a duplicate email
      console.log(err)
      res.status(400).json(err);
    }
  }