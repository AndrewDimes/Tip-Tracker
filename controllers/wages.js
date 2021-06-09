const Job = require('../models/job');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    createWage,
    getWages
  };

  async function createWage(req, res) {
    console.log('in wage controller')
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

  async function getWages(req, res){
    const job = await Job.findById(req.params.id)
    const user = await User.findOne({ _id: req.user._id });
    let totalTips = 0
    let totalWages = 0
    let totalHours = 0
    let totalIncome = 0
    for(let i=0; i < job.wages.length; i++){
      console.log(job.wages[i].tips, 'in loop')
      totalTips += job.wages[i].tips
      totalWages += job.wages[i].wage
      totalHours += job.wages[i].hours
      totalIncome = totalTips + totalWages
    }
    try {
      const jobs = await Job.find({user:req.user})
      res.status(200).json({ totalTips, totalWages, totalHours, totalIncome })
    } catch (err) {
      res.json(err)
    }

    console.log(totalTips, 'tip total', totalWages, 'wage', totalHours,'hours', totalIncome, 'income')
  }

  function createJWT(user) {
    return jwt.sign(
      { user }, // data payload
      SECRET,
      { expiresIn: '24h' }
    );
  }