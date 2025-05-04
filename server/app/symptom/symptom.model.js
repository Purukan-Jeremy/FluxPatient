const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
  nama_gejala: { type: String, required: true },
  deskripsi: { type: String, required: true }
});

// Pastikan nama koleksi sesuai dengan yang ada di database (misalnya 'gejala')
const Symptom = mongoose.model("Symptom", symptomSchema, "gejala");

module.exports = Symptom;
