const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String },
  created: { type: String },
  updated: { type: String },
  status: { type: String },
  title: { type: String },
  text: { type: String },
  photo: { type: String },
  price: { type: String },
  phone: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
