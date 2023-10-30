const Corporate = require("../models/corporate");

const create = async (corporate) => {
  try {
    const newCorporate = new Corporate({
      company_name: corporate.company_name,
      full_name: corporate.full_name,
      work_email: corporate.work_email,
      phone_no: corporate.phone_no,
      job_title: corporate.job_title,
      training_goals: corporate.training_goals,
      training_software: corporate.training_software,
    });
    await newCorporate.save();
    return newCorporate;
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    const getCorporates = Corporate.find({});
    return getCorporates;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, getAll };
