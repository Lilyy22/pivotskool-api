const router = require("express").Router();
const { curriculum } = require("../controllers/curriculumController");
const validateEmail = require("../subscriptionMiddleware/validateEmail");

router.post("/curriculum", validateEmail, subscribe);

module.exports = router;
