const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date },
  tags: [String],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);
