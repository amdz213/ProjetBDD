const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
});
  module.exports = mongoose.model("comments", CategorySchema);