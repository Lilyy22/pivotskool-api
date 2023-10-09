const Joi = require("joi");
const {
  emailAlreadyExists,
} = require("../../NewsletterSubscription/services/subscription");

const emailSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "et"] },
    })
    .pattern(new RegExp("^[^s@]+@[^s@]+.[^s@]{2,}$"))
    .required(),
});

const validateEmail = async (req, res, next) => {
  try {
    const { error } = emailSchema.validate(req.body);
    if (error) {
      throw new Error(error.message);
    }
    await validation(req.body.email);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const validation = async (email) => {
  if (email) {
    const is_dup = await emailAlreadyExists(email);
    if (is_dup.length === 0) {
      return true;
    } else {
      throw new Error("Email is already suscribed.");
    }
  }
};

module.exports = validateEmail;
