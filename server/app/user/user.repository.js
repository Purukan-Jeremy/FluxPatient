//Layer repository berfungsi untuk komunikasi dengan
// database boleh ODM boleh juga pakai raw query

const Pasiens = require("./user.model");

const findAll = async () => {
  const pasiens = await Pasiens.find();
  return pasiens;
};

const findById = async (id) => {
  const pasiens = await Pasiens.findById(id);
  return pasiens;
};

const create = async (data) => {
  const newPasien = new Pasiens(data);
  return await newPasien.save();
};

const deleteById = async (id) => {
  return await Pasiens.findByIdAndDelete(id);
};

const updateById = async (id, data) => {
  return await Pasiens.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  findAll,
  findById,
  create,
  deleteById,
  updateById,
};
