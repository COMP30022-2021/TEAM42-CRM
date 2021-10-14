const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log("nodemailer is ready, can send email now");

function sendMail(toMail, subject, text) {
  let mailOption = {
    from: process.env.EMAIL_ACCOUNT,
    to: toMail,
    subject: subject,
    text: text,
    html: '<p>{text}</p> <img src="cid:logo"/>',
    attachments: [
      {
        filename: "Logo_Design5.png",
        path: "../crm/src/res/images/Logos/Logo_Design5.png",
        cid: "logo",
      },
    ],
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mail send to: " + toMail + "\ninfo: " + info);
    }
  });
}

module.exports = sendMail;
