const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("comments", CommentsSchema);
