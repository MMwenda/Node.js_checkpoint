const nodemailer = require("nodemailer"); // this imports the nodemailer module

const transporter = nodemailer.createTransport({
  service: "gmail", //this is the email service that will be used to send the email
  auth: {
    user: "youthoughtiusedmyactual@gmail.com", //sender's email address
    pass: "youthought",                        //sender's email password
  }
});

const mailOptions = {
  from: "...", //sender's email address
  to: "...",   //receiver's email address
  subject: "Sending Email using Node.js",
  text: "...",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(`This error showed up in the email sending process : ${err}`);
  } 
  else {
    console.log(`Email sent: ${info.response}`); //This will log the response of the email sending process
  }
});

//this kindof beat me, but i shall return to it later
