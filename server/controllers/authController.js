const User = require("../models/userSchema.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const generateVerificationCode = require("../utils/generateVerficationCode.js");
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie.js");

const {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordRestEmail,
  sendingResetPasswordSuccessEmail,
} = require("../service/sendingEmails.js");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !password || !email) {
      throw new Error("All Fields required!");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        status: "failure",
        message: "user aleardy exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationCode();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    await generateTokenAndSetCookie(res, user._id);
    console.log("📨 About to send email...");
    await sendVerificationEmail(user.email, user.verificationToken);
    console.log("📨 Email function called");

    res.status(200).json({
      status: "success",
      message: "user add successfully!",
      data: {
        ...user._doc,
        password: null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const verifiyUser = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpireAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }
    console.log(user.verificationToken);

    user.isVerified = true;

    user.verificationToken = null;
    user.verificationTokenExpireAt = null;

    await user.save();
    //console.log("Sending welcome email to:", user.email);

    await sendWelcomeEmail(user.email, user.name);

    res.status(200).json({
      success: true,
      message: "User verified successfully",
    });
  } catch (err) {
    //console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  try {
    res.status(200).json({
      status: "success",
      message: "logout successfully!",
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: "internal Server Error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    generateTokenAndSetCookie(res, user._id);
    user.lastLogin = new Date();

    await user.save();
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "internal server Error",
    });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;
    user.passwordRestToken = resetPasswordToken;
    user.passwordRestTokenExpiresAt = resetTokenExpiresAt;
    await user.save();

    //console.log(user.passwordRestToken);
    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`;

    await sendPasswordRestEmail(user.email, user.name, resetLink);
    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      passwordRestToken: token,
      passwordRestTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
    }

    // update password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.passwordRestToken = undefined;
    user.passwordRestTokenExpiresAt = undefined;
    await user.save();

    await sendingResetPasswordSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    //console.log("Error in resetPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(401).json({
        status: "failure",
        message: "User not found!",
      });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "faliure",
      message: err.message,
    });
  }
};

module.exports = {
  signup,
  login,
  logout,
  verifiyUser,
  forgetPassword,
  resetPassword,
  checkAuth,
};
