const { create, getAll } = require("../services/corporateService");

const createCorporate = async (req, res) => {
  try {
    const newCorporate = await create(req.body);
    res.send(newCorporate);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllCorporate = async (req, res) => {
  try {
    const get = await getAll();
    res.send(get);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createCorporate, getAllCorporate };
