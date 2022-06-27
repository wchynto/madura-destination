const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.once("connected", () => {
  console.log("Database connection success");
});

db.once("error", () => {
  console.log("Database connection fail");
});
