const Joi = require("joi");

const corporateValidation = async (req, res, next) => {
  const validSchema = Joi.object({
    company_name: Joi.string().required().min(1),
    full_name: Joi.string().required().min(4).max(40),
    work_email: Joi.string().email().required(),
    phone_no: Joi.string(),
    job_title: Joi.string().required(),
    training_goals: Joi.string(),
    training_software: Joi.string().required(),
  });
  const { error } = validSchema.validate(req.body);
  if (error) {
    res.status(400).send({ error: error.message });
  } else {
    next();
  }
};

module.exports = corporateValidation;
