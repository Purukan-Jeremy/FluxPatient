const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  spesialis: { type: String, required: true },
  jadwal_praktik: { type: String, required: true },
  status_ketersediaan: { type: String, required: true }
});

const Doctors = mongoose.model("Doctors", doctorsSchema, "dokter");

module.exports = Doctors;
