const { create, getAll } = require("../services/subscription");
const sendEmail = require("../../email/emailTransport");

const subscribe = async (req, res) => {
  try {
    // const newSub = await create(req.body);
    // res.send(newSub);cd
    await sendEmail(req.body.email, "Email Verification", "verify your email");
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
