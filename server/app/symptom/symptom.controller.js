const express = require("express");
const router = express.Router(); // Inisialisasi router

const { getSymptomById, getAllSymptoms } = require("./symptom.service");

// GET semua symptoms
router.get("/", async (req, res) => {
  try {
    const symptoms = await getAllSymptoms();
    res.json({
      status: "success",
      message: "List of symptoms",
      data: symptoms,
    });
  } catch (error) {
    console.error("Error fetching symptoms:", error);
    res.status(500).json({
      status: "error",
      message: error.message || "Unable to fetch symptoms",
    });
  }
});

// GET symptom by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const symptom = await getSymptomById(id);

    if (!symptom) {
      return res.status(404).json({
        status: "error",
        message: "Symptom not found",
      });
    }

    res.json({
      status: "success",
      message: "Symptom found",
      data: symptom,
    });
  } catch (error) {
    console.error(`Error fetching symptom with ID ${req.params.id}:`, error);
    res.status(500).json({
      status: "error",
      message: error.message || "Internal server error",
    });
  }
});

module.exports = router;
