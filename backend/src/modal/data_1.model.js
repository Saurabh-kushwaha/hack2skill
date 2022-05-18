const mongoose = require("mongoose");
const data_1Schema = new mongoose.Schema({
  full_name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  number: { type: Number, required: true },
  city: { type: String, required: true },
  url: { type: String, required: true },
});
const data_1 = mongoose.model("data_1", data_1Schema);
module.exports = data_1;
