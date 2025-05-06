// Layer repository berfungsi untuk komunikasi dengan
// database, boleh ODM atau raw query

const Symptom = require("./symptom.model");

const findAll = async () => {
  const symptoms = await Symptom.find();
  return symptoms;
};

const findById = async (id) => {
  const symptom = await Symptom.findById(id);
  return symptom;
};

module.exports = {
  findAll,
  findById,
};
