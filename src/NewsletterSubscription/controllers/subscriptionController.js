const { create, getAll } = require("../services/subscription");
const sendEmail = require("../../email/emailTransport");

const subscribe = async (req, res) => {
  try {
    await sendEmail(
      "info@pivotskool.com",
      req.body.email,
      "<strong>Email Verification</strong>",
      "verify your email"
    );
    const newSub = await create(req.body);
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
