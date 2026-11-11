require("dotenv").config();
const express = require("express");
const ConnectDB = require("./db/db");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

ConnectDB();

app.get("/health", (req, res) => {
  res.json({ message: "Backend API is running..." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
