const mongoose = require("mongoose");

const ConnectDB = () => {
  const MONGO_URI = process.env.MONGO_URI;
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = ConnectDB;
