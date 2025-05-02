const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const usersController = require("./app/user/user.controller");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/api", usersController);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use(cors());

module.exports = app;
