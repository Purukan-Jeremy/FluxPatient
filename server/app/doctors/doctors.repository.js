// Layer repository berfungsi untuk komunikasi dengan
// database, boleh ODM atau raw query

const Doctors = require("./doctors.model");

const findAll = async () => {
  const doctors = await Doctors.find();
  return doctors;
};

const findById = async (id) => {
  const doctors = await Doctors.findById(id);
  return doctors;
};

module.exports = {
  findAll,
  findById,
};
