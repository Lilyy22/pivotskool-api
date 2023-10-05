const Corporate = require("../models/corporate");

const create = async ({
  company_name,
  full_name,
  work_email,
  phone_no,
  job_title,
  training_goals,
  training_software,
}) => {
  try {
    const newCorporate = new Corporate({
      company_name: company_name,
      full_name: full_name,
      work_email: work_email,
      phone_no: phone_no,
      job_title: job_title,
      training_goals: training_goals,
      training_software: training_software,
    });
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
