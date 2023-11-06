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
  transporter.verify(async (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
      try {
        return await transporter.sendMail({
          from: `'PivotSkool' ${process.env.DOMAIN_EMAIL}`,
          to: to,
          subject: subject,
          html: body,
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  });
};

const sendEmailWithAttachment = async (
  to,
  subject,
  body,
  filename,
  filepath
) => {
  transporter.verify(async (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
      try {
        return await transporter.sendMail({
          from: `'PivotSkool Curriculum' ${process.env.DOMAIN_EMAIL}`,
          to: to,
          subject: subject,
          html: body,
          attachments: [
            {
              filename: filename,
              path: filepath,
            },
          ],
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  });
};

module.exports = { sendEmail, sendEmailWithAttachment };
