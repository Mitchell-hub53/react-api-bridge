const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  projectUrl: {
    type: String,
  },
  tags: {
      type: [String],
      default: []
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
