const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true, lowercase: true },
  jobTitle: { type: String, required: true, lowercase: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);