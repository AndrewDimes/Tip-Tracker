const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    companyName: {type: String, required: true, lowercase: true, unique: true},
    jobTitle: {type: String, required: true, lowercase: true},
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Job', jobSchema);