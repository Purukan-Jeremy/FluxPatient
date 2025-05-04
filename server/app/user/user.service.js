//Layer service adalah layer untuk handle
//Bussiness logic

const {
  findAll,
  findById,
  create,
  deleteById,
  updateById,
} = require("./user.repository");

const getAllPasiens = async () => {
  const pasiens = await findAll();
  return pasiens;
};

const getPasienById = async (id) => {
  const pasiens = await findById(id);
  if (!pasiens) {
    throw Error("User tidak ditemukan");
  }
  return pasiens;
};

const createPasien = async (data) => {
  if (
    !data.nama ||
    !data.tanggallahir ||
    !data.alamat ||
    !data.umur ||
    !data.hp ||
    !data.gender
  ) {
    throw Error("Data pasien tidak lengkap");
  }

  const newPasien = await create(data);
  return newPasien;
};

const deletePasien = async (id) => {
  const pasien = await findById(id);
  if (!pasien) {
    throw Error("Pasien tidak ditemukan");
  }

  await deleteById(id);
  return pasien;
};

const updatePasien = async (id, data) => {
  const existingPasien = await findById(id);
  if (!existingPasien) {
    throw Error("Pasien tidak ditemukan");
  }

  const updatedPasien = await updateById(id, data);
  return updatedPasien;
};

module.exports = {
  getAllPasiens,
  getPasienById,
  createPasien,
  deletePasien,
  updatePasien,
};
