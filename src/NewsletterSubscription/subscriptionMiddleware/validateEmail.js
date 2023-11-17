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

const emailPlanSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "et"] },
    })
    .pattern(new RegExp("^[^s@]+@[^s@]+.[^s@]{2,}$"))
    .required(),
  plan: Joi.string().min(2).required(),
});

const validateEmail = async (req, res, next) => {
  try {
    const { error } = emailSchema.validate(req.body);
    if (error) {
      throw new Error(error.message);
    }
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const validateEmailPlan = async (req, res, next) => {
  try {
    const { error } = emailPlanSchema.validate(req.body);
    if (error) {
      throw new Error(error.message);
    }
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { validateEmail, validateEmailPlan };
