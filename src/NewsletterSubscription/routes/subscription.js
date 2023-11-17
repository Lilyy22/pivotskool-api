const router = require("express").Router();
const isAuthenticated = require("../../auth/middleware/authMiddleware");
const { validateEmail } = require("../subscriptionMiddleware/validateEmail");
const {
  subscribe,
  getAllSubscribers,
  verifySubEmail,
} = require("../controllers/subscriptionController");

router.post("/", validateEmail, subscribe);
router.get("/", isAuthenticated, getAllSubscribers);
router.get("/verify/:token", verifySubEmail);

module.exports = router;
