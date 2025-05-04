const mongoose = require("mongoose");
const { mongoUrl } = require("../config"); 

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
