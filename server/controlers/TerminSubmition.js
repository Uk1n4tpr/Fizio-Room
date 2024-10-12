const mongoose = require("mongoose");
const Table = require("../models/Table");
const mailSenderMarko = require("../helpers/mailSenderMarko");
const mailSenderPacient = require("../helpers/mailSenderPacient");

const TerminSubmition = async (req, res) => {
  const { terminInfo, pacientInfo } = req.body;
  console.log(req.body);
  console.log(terminInfo.filter.terapeut);
  try {
    if (
      terminInfo.filter.terapeut === "terapeuti" ||
      terminInfo.filter.usluga === "usluge"
    ) {
      console.log("input terapeut and usluge");
      return res.status(400).json("Morate unijeti terapeuta i uslugu");
    }

    const dateFilter = terminInfo.dateTermin;
    const tableIndex = terminInfo.index;
    const nextIndex = terminInfo.index + 1;

    const checkTable = await Table.findOne({ date: dateFilter });

    const newItem = {
      terapeut: terminInfo.filter.terapeut,
      usluga: terminInfo.filter.usluga,
      ocupied: terminInfo.ocupied,
      pacient: pacientInfo,
    };

    const updateResult = await Table.updateOne(
      { date: dateFilter, [`times.${tableIndex}`]: { $exists: true } },
      {
        $push: { [`times.${tableIndex}.appointments`]: newItem },
      }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(404).json("Termin not found or no updates made");
    }

    //here we send the mail
    await mailSenderPacient(terminInfo, pacientInfo);
    await mailSenderMarko(terminInfo, pacientInfo);

    const updatedResponse = await Table.findOne({ date: dateFilter });
    return res.json(updatedResponse);
  } catch (error) {
    console.error("error posting termin: ", error);
  }
};

module.exports = TerminSubmition;
