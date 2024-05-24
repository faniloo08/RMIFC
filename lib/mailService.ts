'use server';

// import nodemailer from 'nodemailer';

//var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendEmail(formData: FormData) {
  // var transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NODEMAILER_EMAIL,
  //     pass: process.env.NODEMAILER_PW,
  //   },
  // });
  //console.log("Test 123456789012345678901234567890")
  const rawFormData = {
    toEmail: formData.get('email'),
    subject: formData.get('topic'),
    otpText: formData.get('message'),
  };
  console.log(rawFormData); 

  // var mailOptions = {
  //   from: process.env.NODEMAILER_EMAIL,
  // };

  // await new Promise((resolve, reject) => {
  //   // send mail
  //   transporter.sendMail(mailOptions, (err, response) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(response);
  //     }
  //   });
  // });
}