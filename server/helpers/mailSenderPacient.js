const nodemailer = require("nodemailer");

const mailSenderPacient = async (termin, pacient) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const date = termin.dateTermin;
  console.log(termin.clock);
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: pacient.email,
    subject: "Zakazivanje termina",
    html: `
                <h1>Uspješno ste zakazali termin</h1>
                <p>Info o terminu</p>
                <p>Termin ste zakazali kod ${termin.filter.terapeut}</p>
                <p>za uslugu ${termin.filter.usluga}</p>
                <p>Termin: ${date} u ${termin.clock.time}h</p>
                
        `,
  });
};

module.exports = mailSenderPacient;
