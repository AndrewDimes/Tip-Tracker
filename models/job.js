const mongoose = require('mongoose');

const wageSchema = new mongoose.Schema({
  wage: {type: Number, required: true},
  tips: {type: Number, required: true},
  hours: {type: Number, required: true},
  date: {type: Date, required: true, unique: true}
}, {
  timestamps: true
})
const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true, lowercase: true },
  jobTitle: { type: String, required: true, lowercase: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  wages: [wageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);