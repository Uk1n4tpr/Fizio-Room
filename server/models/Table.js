const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TableSchema = new Schema({
  date: {type: String, required: true},
  times: {type: Array, required: true},
});

const TableModel = model("Table", TableSchema);

module.exports = TableModel;