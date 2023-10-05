const mongoose = require("mongoose");

const corporateSchema = mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "Company name is required."],
  },
  full_name: {
    type: String,
    require: [true, "Full name is required."],
  },
  work_email: {
    type: String,
    required: [true, "Work email is required."],
  },
  phone_no: {
    type: String,
  },
  job_title: {
    type: String,
    required: [true, "Job title is required."],
  },
  training_goals: {
    type: String,
  },
  training_software: {
    type: String,
  },
});

module.exports = mongoose.model("Corporate", corporateSchema);
