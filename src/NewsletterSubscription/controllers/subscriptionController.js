const {
  create,
  getAll,
  verifyEmail,
  emailAlreadyExists,
} = require("../services/subscription");
const { sendEmail } = require("../../email/emailTransport");

const subscribe = async (req, res) => {
  try {
    const alreadyExist = await validation(req.body.email);
    if (!alreadyExist) {
      res.send("Email is already suscribed.");
    } else {
      const newSub = await create(req.body);
      const html = `
        <html>
          <head>
            <style>
              h1{
                font-weight:bold;
              }
            </style>
          </head>
          <body>
            <h3>Hello there,</h3>
            <p>Thanks for your susbscription.</p>
            <p>Please click the link below to verify your email.</p>
            <a href="${newSub.token}">Click here</a>
          </body>
        </html>`;
      await sendEmail(newSub.subscriber?.email, "Email Verification", html);
      res.send("Please Check your email, we have sent a verification link.");
    }
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

const verifySubEmail = async (req, res) => {
  try {
    const token = req.params.token;
    const verifed = await verifyEmail(token);
    res.send(verifed);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const validation = async (email) => {
  if (email) {
    const is_dup = await emailAlreadyExists(email);
    if (is_dup.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = { subscribe, getAllSubscribers, verifySubEmail };
