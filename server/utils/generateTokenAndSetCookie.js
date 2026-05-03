const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const serect_key = process.env.MY_SERECT_KEY;

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, serect_key, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
  secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

module.exports = generateTokenAndSetCookie;
