const Job = require('../models/job');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  createJob,
  getJobs,
  deleteJob
};

async function createJob(req, res) {
  const user = await User.findOne({ _id: req.user._id });
  try {
    const job = new Job({ ...req.body });
    job.user = req.user
    await job.save();
    const token = createJWT(user);
    res.json({ token })
  } catch (err) {
    // Probably a duplicate email
    console.log(err)
    res.status(400).json(err);
  }
}

async function getJobs(req, res) {
  try {
    const jobs = await Job.find({user:req.user})
    res.status(200).json({ jobs })
  } catch (err) {
    res.json(err)
  }
}

function deleteJob(req, res){
  console.log(req.params.id)
  const job = Job.findByIdAndDelete(req.params.id).exec().then(doc => {
    if(!doc) {return res.status(404).end();}
    return res.status(204).end();
  })
  .catch(err => next(err));
}


function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}