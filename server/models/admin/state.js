const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      country_code:{
        type: String,
        required: true, 
      }
})
module.exports = mongoose.model('state', StateSchema);