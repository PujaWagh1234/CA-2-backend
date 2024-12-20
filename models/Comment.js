const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
