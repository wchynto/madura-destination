const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  header_title: {
    type: String,
    required: true,
  },
  header_text: {
    type: String,
    required: true,
  },
  box_title: {
    type: String,
    required: true,
  },
  box_text: {
    type: String,
    required: true,
  },
  box_image: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
});

module.exports = mongoose.model("Post", Post);
