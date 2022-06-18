import { Schema, model } from "mongoose";
const ArticleSchema = new Schema({
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
    type: Date,
    required: true,
  },
  publication_state: {
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
    required: true,
    unique: true,
  },
});
export default model("Article", ArticleSchema);
