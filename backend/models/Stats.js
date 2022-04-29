const mongoose = require("mongoose");
const StatsSchema = new mongoose.Schema(
  {
    reader: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },
    admin: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  }
);

module.exports = mongoose.model("Stat", StatsSchema);
