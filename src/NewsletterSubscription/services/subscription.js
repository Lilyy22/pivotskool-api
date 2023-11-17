const Subscription = require("../models/subscription");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;
const client = process.env.CORS;

const create = async ({ email }) => {
  try {
    const token = jwt.sign(
      {
        email: email,
      },
      SECRET_KEY,
      { expiresIn: "60m" }
    );
    const newSubscription = new Subscription({
      email: email,
    });
    const newSub = await newSubscription.save();
    return {
      subscriber: newSub,
      token: `${client}/verify/${token}`,
    };
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    const allSub = await Subscription.find({});
    return allSub;
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

const verifyEmail = async (token) => {
  try {
    const subscriber = jwt.verify(token, SECRET_KEY);
    const sub = await Subscription.findOne({ email: subscriber.email });
    if (!sub?.email_verified_at) {
      await Subscription.findOneAndUpdate(
        { email: subscriber.email },
        { email_verified_at: new Date() }
      );
      return "Email is verified successfully.";
    } else {
      return "Email is already verified.";
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { create, getAll, emailAlreadyExists, verifyEmail };
