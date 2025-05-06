const express = require("express");
const router = express.Router(); // Inisialisasi router

const { getDoctorsById, getAllDoctors } = require("./doctors.service");

// GET semua doctorss
router.get("/", async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.json({
      status: "success",
      message: "List of doctors",
      data: doctors,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({
      status: "error",
      message: error.message || "Unable to fetch doctors",
    });
  }
});

// GET doctors by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doctors = await getDoctorsById(id);

    if (!doctors) {
      return res.status(404).json({
        status: "error",
        message: "Doctors not found",
      });
    }

    res.json({
      status: "success",
      message: "Doctors found",
      data: doctors,
    });
  } catch (error) {
    console.error(`Error fetching doctors with ID ${req.params.id}:`, error);
    res.status(500).json({
      status: "error",
      message: error.message || "Internal server error",
    });
  }
});

module.exports = router;
