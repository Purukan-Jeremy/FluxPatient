const Symptom = require("./symptom.model");

const getAllSymptoms = async () => {
  try {
    const symptoms = await Symptom.find();  // Mengambil data dari koleksi 'gejala'
    if (symptoms.length === 0) {
      throw new Error("No symptoms found in the database");
    }
    return symptoms;
  } catch (error) {
    console.error("Error fetching all symptoms:", error);
    throw error;
  }
};

const getSymptomById = async (id) => {
  try {
    const symptom = await Symptom.findById(id);  // Mengambil data berdasarkan ID
    return symptom;
  } catch (error) {
    console.error(`Error fetching symptom with ID ${id}:`, error);
    throw error;
  }
};

module.exports = { getAllSymptoms, getSymptomById };
