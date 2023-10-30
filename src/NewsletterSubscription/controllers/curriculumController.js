const { send } = require("../services/subscription");
const sendEmail = require("../../email/emailTransport");

const curriculum = async (req, res) => {
  try {
    const newSub = await send(req.body);
    res.send(newSub);
    await sendEmail(req.body.email, "Email Verification", "verify your email");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { curriculum };
