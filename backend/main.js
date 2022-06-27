const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./config/database");

const UserRoute = require("./routes/user_route");

const app = express();
const port = process.env.PORT;

app.use(morgan("short"));
app.use(cors());
app.use(express.json());

app.use("/users", UserRoute);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
