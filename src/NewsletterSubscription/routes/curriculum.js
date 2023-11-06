const router = require("express").Router();
const curriculum = require("../controllers/curriculumController");
const {
  validateEmailPlan,
} = require("../subscriptionMiddleware/validateEmail");

router.post("/", validateEmailPlan, curriculum);

module.exports = router;
