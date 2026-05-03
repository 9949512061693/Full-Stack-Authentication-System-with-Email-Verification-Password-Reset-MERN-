const express = require("express");
const verifyToken = require("../middleware/verificationToken.js")
const {
  signup,
  login,
  logout,
  verifiyUser,
  forgetPassword,
  resetPassword,
  checkAuth
} = require("../controllers/authController.js");

const router = express.Router();

router.get('/check-auth', verifyToken,checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-user", verifiyUser);
router.post("/forgot-password", forgetPassword);

router.post("/reset-password/:token", resetPassword);

module.exports = router;
