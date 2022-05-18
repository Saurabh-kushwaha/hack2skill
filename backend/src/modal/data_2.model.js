const mongoose = require("mongoose");
const data2Schema = new mongoose.Schema({
  full_name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  team_name: { type: String, required: true },
});
const data_2 = mongoose.model("data_2", data2Schema);
module.exports = data_2;
