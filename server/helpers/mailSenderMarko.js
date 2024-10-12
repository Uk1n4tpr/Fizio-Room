const nodemailer = require("nodemailer");

const mailSenderMarko = async (termin, pacient) => {
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
    to: process.env.RECEIVINGEMAIL,
    subject: "Pacient termin submition",
    html: `
                <h1>Termin zakazan</h1>
                <p>Pacijent ${pacient.name} ${pacient.lastName} je zakazao termin</p>
                <p>Termin: ${date} u ${termin.clock.time}h</p>
                <p>kod ${termin.filter.terapeut} za uslugu ${termin.filter.usluga}</p>
                <p>Info o pacijentu: </p>
                <ul>
                    <li>EMAIL: ${pacient.email}</li>
                    <li>MOBILNI: ${pacient.phone}</li>
                </ul>
        `,
  });
};

module.exports = mailSenderMarko;
