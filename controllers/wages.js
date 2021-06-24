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
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    function setToMonday(date) {
        let day = date.getDay() || 7;
        if (day !== 1) {
            date.setHours(-24 * (day - 1));
        }

        return date;
    }
    function setToSunday(date) {
        let day = date.getDay() || 7;
        if (day !== 7) {
            date.setHours(24 * (day - 1))
        }
        return date;
    }
    let monday = setToMonday(new Date())
    let sunday = setToSunday(new Date())
    sunday.setHours(00,00,00,00)
    monday.setHours(00,00,00,00)
    console.log(month)
    const job = await Job.findById(req.params.id)
    const user = await User.findOne({ _id: req.user._id });
    let totalTips = 0
    let totalWages = 0
    let totalHours = 0
    let totalIncome = 0
    if(req.params.viewBy === 'w'){
      for(let i=0; i<job.wages.length;i++){
        if(job.wages[i].date <= sunday && job.wages[i].date >= monday){
          console.log(job.wages[i].date.toLocaleString('default', {month: 'long'}))
          totalTips += job.wages[i].tips
          totalWages += job.wages[i].wage
          totalHours += job.wages[i].hours
          totalIncome = totalTips + totalWages
        }
      }
    } else if(req.params.viewBy === 'm'){
      for(let i=0; i<job.wages.length;i++){
        if(job.wages[i].date.toLocaleString('default', {month: 'long'}) === 'June'){
          totalTips += job.wages[i].tips
          totalWages += job.wages[i].wage
          totalHours += job.wages[i].hours
          totalIncome = totalTips + totalWages
        }
      }
    } else if(req.params.viewBy === 'y'){
      for(let i=0; i<job.wages.length;i++){
        if(job.wages[i].date.toLocaleString('default', {year: 'numeric'}) === '2021'){
          totalTips += job.wages[i].tips
          totalWages += job.wages[i].wage
          totalHours += job.wages[i].hours
          totalIncome = totalTips + totalWages
          averageIncome = totalIncome / totalHours
          console.log(averageIncome)
        }
      }
    }
    try {
      const jobs = await Job.find({user:req.user})
      res.status(200).json({ totalTips, totalWages, totalHours, totalIncome })
    } catch (err) {
      res.json(err)
    }
  }

  function createJWT(user) {
    return jwt.sign(
      { user }, // data payload
      SECRET,
      { expiresIn: '24h' }
    );
  }