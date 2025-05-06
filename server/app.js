const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const connectDB = require("./database");

const usersController = require("./app/user/user.controller");
const symptomsController = require("./app/symptom/symptom.controller");
const pemeriksaanController = require("./app/pemeriksaan/pemeriksaan.controller");
const doctorsController = require("./app/doctors/doctors.controller");

const app = express();
connectDB();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", usersController);
app.use("/api/symptoms", symptomsController);
app.use("/api/pemeriksaan", pemeriksaanController);
app.use("/api/doctors", doctorsController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
