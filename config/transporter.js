const nodemailer = require("nodemailer");

// Create a transporter using your email credentials
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "ramakanth@rk-exim.com",
    pass: process.env.PASS_KEY,
  },
});

module.exports = transporter;
