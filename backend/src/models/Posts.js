const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  publication_date: {
    type: date,
    required: true,
  },
  published: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Post", PostSchema);
