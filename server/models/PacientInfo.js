const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PacientInfoSchema = new Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  usluga: {type: String, required: true},
  therapist: {type: String, requried: true},
});

const PacientInfoModel = model("PacientInfo", PacientInfoSchema);

module.exports = PacientInfoModel;
