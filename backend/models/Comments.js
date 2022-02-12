const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
  module.exports = mongoose.model("comments", CategorySchema);