const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,///in
    required: true,
  }
})
module.exports = mongoose.model('Country', CountrySchema);