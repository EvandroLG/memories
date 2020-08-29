import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  description: {
    type: String,
    trim: true,
  },
});

export default model("Post", PostSchema);
