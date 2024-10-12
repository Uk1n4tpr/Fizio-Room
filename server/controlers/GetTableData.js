const Table = require("../models/Table");
const mongoose = require("mongoose");

//function for geting table data for day 
const getTableData = async (req, res) => {
  const { dateToStr, terapeut, usluga } = req.params;
  console.log(req.params);
  try {
    const table = await Table.findOne({ date: dateToStr });
    res.json(table);
  } catch (error) {
    console.error("error fetching data: ", error);
  }
};

module.exports = getTableData;
