const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://anandswaroop693_db_user:${process.env.MONGODB_PASSWORD}@authflow.20lsddz.mongodb.net/auth_DB`,
    );

    console.log("MongoDB connected:", connection.connection.host);
  } catch (err) {
    console.log("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
