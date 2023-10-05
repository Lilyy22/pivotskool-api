const router = require("express").Router();
const {
  createCorporate,
  getAllCorporate,
} = require("../controllers/corporateController");
const corporateMiddleware = require("../corporateMiddleware/corporateMiddleware");

router.post("/", corporateMiddleware, createCorporate);
router.get("/", getAllCorporate);

module.exports = router;
