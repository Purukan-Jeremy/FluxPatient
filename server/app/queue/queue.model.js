const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
  {
    nama: String,
    gender: String,
    hp: String,
    treatment: String,
    deskripsi: String,
    queueNumber: Number,
    expireTime: Number, // timestamp in ms
  },
  { collection: "pasiens", timestamps: true }
);

module.exports = mongoose.model("Queue", queueSchema);
