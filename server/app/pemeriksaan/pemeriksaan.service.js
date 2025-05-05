// Layer service berfungsi untuk menangani business logic
// dan memanggil layer repository

const {
  findAll,
  findById,
  create,
  deleteById,
  updateById,
} = require("./pemeriksaan.repository");

const getAllPemeriksaan = async () => {
  const pemeriksaan = await findAll();
  return pemeriksaan;
};

const getPemeriksaanById = async (id) => {
  const pemeriksaan = await findById(id);
  if (!pemeriksaan) {
    throw Error("Pemeriksaan tidak ditemukan");
  }
  return pemeriksaan;
};

const createPemeriksaan = async (data) => {
  if (!data.treatment) {
    throw Error("Data pemeriksaan tidak lengkap (treatment wajib diisi)");
  }

  const newPemeriksaan = await create(data);
  return newPemeriksaan;
};

const deletePemeriksaanById = async (id) => {
  const pemeriksaan = await findById(id);
  if (!pemeriksaan) {
    throw Error("Pemeriksaan tidak ditemukan");
  }

  await deleteById(id);
  return pemeriksaan;
};

const updatePemeriksaanById = async (id, data) => {
  const existing = await findById(id);
  if (!existing) {
    throw Error("Pemeriksaan tidak ditemukan");
  }

  const updated = await updateById(id, data);
  return updated;
};

module.exports = {
  getAllPemeriksaan,
  getPemeriksaanById,
  createPemeriksaan,
  deletePemeriksaanById,
  updatePemeriksaanById,
};
