const { create, getAll } = require("../services/corporateService");

const createCorporate = async (req, res) => {
  try {
    const newCorporate = await create(req.body);
    res.send(newCorporate);
  } catch (error) {
    throw error;
  }
};

const getAllCorporate = async (req, res) => {
  try {
    const get = await getAll();
    res.send(get);
  } catch (error) {
    throw error;
  }
};

module.exports = { createCorporate, getAllCorporate };
