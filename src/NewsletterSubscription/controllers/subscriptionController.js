const { create, getAll } = require("../services/subscription");
const { sendEmail } = require("../../email/emailTransport");

const subscribe = async (req, res) => {
  try {
    const html = `<html>
      <head>
        <style>
          h1{
            font-weight:bold;

          }
        </style>
      </head>
      <body>
        <h1>Hello,</h1>
        <p>This is the content of my HTML email template.</p>
        <p>You can include HTML tags and CSS styles to customize the appearance of your email.</p>
      </body>
    </html>`;
    const newSub = await create(req.body);
    await sendEmail(newSub.email, "Email Verification", html);
    res.send(newSub);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAllSubscribers = async (req, res) => {
  try {
    const allSub = await getAll();
    res.send(allSub);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { subscribe, getAllSubscribers };
