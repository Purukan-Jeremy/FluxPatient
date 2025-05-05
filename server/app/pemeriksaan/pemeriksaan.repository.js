// Layer repository berfungsi untuk komunikasi dengan
// database, boleh pakai ODM (seperti Mongoose) atau raw query

const Pemeriksaan = require("./pemeriksaan.model");

const findAll = async () => {
  const pemeriksaan = await Pemeriksaan.find();
  return pemeriksaan;
};

const findById = async (id) => {
  const pemeriksaan = await Pemeriksaan.findById(id);
  return pemeriksaan;
};

const create = async (data) => {
  const newPemeriksaan = new Pemeriksaan(data);
  return await newPemeriksaan.save();
};

const deleteById = async (id) => {
  return await Pemeriksaan.findByIdAndDelete(id);
};

const updateById = async (id, data) => {
  return await Pemeriksaan.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  findAll,
  findById,
  create,
  deleteById,
  updateById,
};
