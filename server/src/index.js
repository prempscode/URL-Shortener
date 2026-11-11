require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ message: "Backend API is running..." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
