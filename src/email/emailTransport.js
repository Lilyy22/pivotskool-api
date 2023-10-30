const mail = require("nodemailer");

const transporter = mail.createTransport({
  host: process.env.DOMAIN_EMAIL_HOST,
  port: process.env.DOMAIN_EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.DOMAIN_EMAIL,
    pass: process.env.DOMAIN_EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, body) => {
  try {
    return await transporter.sendMail({
      from: `'PivotSkool' ${process.env.DOMAIN_EMAIL}`,
      to: to,
      subject: subject,
      text: body,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
