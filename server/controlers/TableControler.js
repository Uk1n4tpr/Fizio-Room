const mongoose = require("mongoose");
const Table = require("../models/Table");

//function for posting new day in DB
const postTable = async (req, res) => {
  const { time, sendingDate } = req.body;
  try {
    //if day exists do nothing if not save it
    const exist = await Table.findOne({date: sendingDate });
    if (exist !== null) {
      console.log("table already exist");
      return res.json("table already exists: ");
    } else {
      console.log("table doesnt exist");
      const response = await Table.create({
        date: sendingDate,
        times: time,
      });
      res.json(response);
    }
  } catch (error) {
    console.error("error posting data: ", error);
  }
};

module.exports = postTable;
