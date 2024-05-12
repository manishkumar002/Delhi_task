const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      state_code: {
        type: String,
        required: true,
      }
})
module.exports = mongoose.model('city', CitySchema);

