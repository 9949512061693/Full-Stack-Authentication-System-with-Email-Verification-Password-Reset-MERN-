const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        status: "failure",
        message: "Unauthorized - no token provided",
      });
    }

    const verify = jwt.verify(token, process.env.MY_SERECT_KEY);
    if (!verify) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized - Invalid token",
      });
    }
    req.userId = verify.userId;
    next();
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: "Server Error",
    });
  }
};

module.exports = verifyToken;
