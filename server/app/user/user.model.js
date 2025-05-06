const mongoose = require("mongoose");

//Buat Schema
const pasienSchema = mongoose.Schema(
  {
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    umur: { type: Number, required: true },
    hp: { type: String, required: true },
    gender: { type: String, required: true },
    treatment: { type: String, required: true },
    deskripsi: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Buat Model
const Pasien = mongoose.model("Pasien", pasienSchema);

module.exports = Pasien;
