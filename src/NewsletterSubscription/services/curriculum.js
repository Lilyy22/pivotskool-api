const Subscription = require("../models/subscription");

const send = async ({ email }) => {
  try {
    const newSubscription = new Subscription({
      email: email,
    });
    return await newSubscription.save();
  } catch (error) {
    throw error;
  }
};

const emailAlreadyExists = async (email) => {
  try {
    const Sub = await Subscription.find({ email: email }, email);
    return Sub;
  } catch (error) {
    throw error;
  }
};

module.exports = { send, emailAlreadyExists };
