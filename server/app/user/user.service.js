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
  const pasien = await findById(id);
  if (!pasien) {
    throw Error("Pasien tidak ditemukan");
  }
  return pasien;
};

const createPasien = async (data) => {
  // Validate required fields
  if (
    !data.nama ||
    !data.alamat ||
    !data.umur ||
    !data.hp ||
    !data.gender ||
    !data.treatment ||
    !data.deskripsi
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
