const mongoose = require("mongoose");

// Buat Schema Pemeriksaan
const pemeriksaanSchema = mongoose.Schema(
  {
    treatment: { type: String, required: true },
    deskripsi: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Buat Model
const Pemeriksaan = mongoose.model(
  "Pemeriksaan",
  pemeriksaanSchema,
  "pemeriksaan"
);

module.exports = Pemeriksaan;
