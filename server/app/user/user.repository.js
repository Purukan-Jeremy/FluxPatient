//Layer repository berfungsi untuk komunikasi dengan
// database boleh ODM boleh juga pakai raw query

const Pasien = require("./user.model");

const findAll = async () => {
  return await Pasien.find();
};

const findById = async (id) => {
  return await Pasien.findById(id);
};

const create = async (data) => {
  const newPasien = new Pasien(data);
  return await newPasien.save();
};

const deleteById = async (id) => {
  return await Pasien.findByIdAndDelete(id);
};

const updateById = async (id, data) => {
  return await Pasien.findByIdAndUpdate(id, data, { new: true });
};

exports.getActiveQueue = async () => {
  const now = Date.now();
  return await Pasien.find({ expireTime: { $gt: now } });
};

exports.deleteExpiredQueue = async () => {
  const now = Date.now();
  return await Pasien.deleteMany({ expireTime: { $lte: now } });
};


module.exports = {
  findAll,
  findById,
  create,
  deleteById,
  updateById,
};
