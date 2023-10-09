const router = require("express").Router();
const isAuthenticated = require("../../auth/middleware/authMiddleware");
const {
  subscribe,
  getAllSubscribers,
} = require("../controllers/subscriptionController");
const validateEmail = require("../subscriptionMiddleware/validateEmail");

router.post("/", validateEmail, subscribe);
router.get("/", isAuthenticated, getAllSubscribers);

module.exports = router;
