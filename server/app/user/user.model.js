const mongoose = require('mongoose');

const pasienSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  alamat: { type: String, required: true },
  umur: { type: Number, required: true },
  hp: { type: String, required: true },
  gender: { type: String, required: true },
  treatment: { type: String, required: true },
  deskripsi: { type: String },
  createdAt: { type: Date, default: Date.now },
  estimatedEndTime: { type: Date, required: true }
});

module.exports = mongoose.model('Pasien', pasienSchema);