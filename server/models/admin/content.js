const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Contentbl', ContentSchema);
