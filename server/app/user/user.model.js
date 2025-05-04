const mongoose = require("mongoose");

//Buat Schema
const pasienSchema = mongoose.Schema(
  {
    nama: { type: String, required: true },
    tanggallahir: String,
    alamat: String,
    umur: Number,
    hp: String,
    gender: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Buat Model
const Pasien = mongoose.model("Pasien", pasienSchema);

module.exports = Pasien;
