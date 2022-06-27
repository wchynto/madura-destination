const mongoose = require("mongoose");

const Image = new mongoose.Schema({
  image_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", Image);
