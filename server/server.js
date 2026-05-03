const express = require("express");
const connectDB = require("./config/connectDB.js");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const authRouter = require("./routes/authRouter.js");

dotenv.config();

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello word!");
});

const port = process.env.PORT || 3000;

app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Sever runing Successfully on ${port}`);
});
