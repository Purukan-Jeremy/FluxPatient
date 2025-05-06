//Layer service adalah layer untuk handle
//Bussiness logic

const Pasien = require('./user.model');

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
const removeExpiredPatients = async () => {
  try {
    const currentTime = new Date();
    const result = await Pasien.deleteMany({
      estimatedEndTime: { $lt: currentTime }
    });
    return result;
  } catch (error) {
    throw new Error(`Failed to remove expired patients: ${error.message}`);
  }
};
// Fungsi untuk memeriksa dan menghapus pasien yang sudah melewati waktu estimasi
const startExpirationCheck = () => {
  // Periksa setiap 1 menit
  setInterval(async () => {
    try {
      await removeExpiredPatients();
      console.log('Checked and removed expired patients');
    } catch (error) {
      console.error('Error in expiration check:', error);
    }
  }, 60000); // 60000 ms = 1 menit
};
const createPasien = async (pasienData) => {
  try {
    // Tambahkan estimasi waktu selesai (misalnya 1 jam dari waktu dibuat)
    const estimatedEndTime = new Date();
    estimatedEndTime.setHours(estimatedEndTime.getHours() + 1);
    
    const pasien = new Pasien({
      ...pasienData,
      estimatedEndTime
    });
    
    return await pasien.save();
  } catch (error) {
    throw new Error(`Error creating pasien: ${error.message}`);
  }
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

exports.getQueueList = async () => {
  return await repository.getActiveQueue();
};

exports.removeExpiredQueue = async () => {
  return await repository.deleteExpiredQueue();
};

module.exports = {
  getAllPasiens,
  getPasienById,
  createPasien,
  deletePasien,
  updatePasien,
  removeExpiredPatients,
  startExpirationCheck
};
