const Doctors = require("./doctors.model");

const getAllDoctors = async () => {
  try {
    const doctors = await Doctors.find();  
    if (doctors.length === 0) {
      throw new Error("No doctors found in the database");
    }
    return doctors;
  } catch (error) {
    console.error("Error fetching all doctors:", error);
    throw error;
  }
};

const getDoctorsById = async (id) => {
  try {
    const doctors = await Doctors.findById(id);  // Mengambil data berdasarkan ID
    return doctors;
  } catch (error) {
    console.error(`Error fetching doctors with ID ${id}:`, error);
    throw error;
  }
};

module.exports = { getAllDoctors, getDoctorsById };
