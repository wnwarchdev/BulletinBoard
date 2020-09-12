const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true, maxlength:30 },
  created: { type: Date, required: true },
  updated: { type: Date },
  status: { type: String },
  title: { type: String, required: true, minlength: 3, maxlength:20 },
  text: { type: String, required: true, minlength: 3, maxlength:60 },
  photo: { type: String },
  price: { type: String },
  phone: { type: String, required: true },
  email: { type: String },
  location: { type: String },
  userIdStamp: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
