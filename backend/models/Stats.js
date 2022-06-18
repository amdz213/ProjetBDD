const mongoose = require("mongoose");
const StatsSchema = new mongoose.Schema({
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
  number_of_views: {
    type: Number,
    required: true, //le nombres de vues est exigé afin d'évaluer la popularité d'un  article pour les statistiques du blog
  },
});

module.exports = mongoose.model("Stat", StatsSchema);
