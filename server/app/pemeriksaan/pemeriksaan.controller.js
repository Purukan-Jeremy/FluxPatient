// Layer controller untuk handle req dan res
// Validasi body

const express = require("express");
const router = express.Router();
const {
  getPemeriksaanById,
  getAllPemeriksaan,
  createPemeriksaan,
  deletePemeriksaanById,
  updatePemeriksaanById,
} = require("./pemeriksaan.service");

/* GET pemeriksaan listing */
router.get("/", async (req, res, next) => {
  try {
    const pemeriksaan = await getAllPemeriksaan();
    res.json({
      status: "success!!!",
      message: "list pemeriksaan",
      data: pemeriksaan,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/pemeriksaan/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pemeriksaan = await getPemeriksaanById(id);
    res.json({
      status: "success",
      message: "detail pemeriksaan",
      data: pemeriksaan,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// POST pemeriksaan
router.post("/pemeriksaan", async (req, res) => {
  try {
    const newPemeriksaan = await createPemeriksaan(req.body);
    res.status(201).json({
      status: "success",
      message: "pemeriksaan berhasil ditambahkan",
      data: newPemeriksaan,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE pemeriksaan
router.delete("/pemeriksaan/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await deletePemeriksaanById(id);
    res.json({
      status: "success",
      message: "pemeriksaan berhasil dihapus",
      data: deleted,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT pemeriksaan
router.put("/pemeriksaan/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await updatePemeriksaanById(id, req.body);
    res.json({
      status: "success",
      message: "pemeriksaan berhasil diupdate",
      data: updated,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
