const {
  welcomeEmailTemplete,
  passwordResetTemplete,
  verificationOTPTemplete,
  PasswordResetSuccesTemplete,
} = require("./mailTemplet.js");

const transporter = require("../config/mailConfig.js");
const dotenv = require("dotenv");
dotenv.config();

const sendVerificationEmail = async (email, token) => {
  try {
    await transporter.sendMail({
      from: `"Authify Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verification Email Regarding Login",
      html: verificationOTPTemplete.replace("{{OTP}}", token),
    });
  } catch (err) {
    console.log(err);
  }
};

const sendWelcomeEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: `"Authify Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Welcome to ESHOP, ${name}! 🎉`,
      html: welcomeEmailTemplete.replace("{{NAME}}", name),
    });
  } catch (err) {
    console.error("Email error:", err);
  }
};

const sendPasswordRestEmail = async (email, name, link) => {
  try {
    await transporter.sendMail({
      from: `"Authify Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Password Reset Link, ${name}!`,
      html: passwordResetTemplete
        .replace("{{Name}}", name) // match template
        .replace("{{RESET_LINK}}", link),
    });
  } catch (err) {
    console.error("Email error:", err);
  }
};

const sendingResetPasswordSuccessEmail = async (email) => {
  try {
    await transporter.sendMail({
      from: `"Authify Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Password Reset Successfully`,
      html: PasswordResetSuccesTemplete,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordRestEmail,
  sendingResetPasswordSuccessEmail,
};
