//Layer controller untuk handle req dan res
// Validasi body

const express = require("express");
const router = express.Router();
const {
  getPasienById,
  getAllPasiens,
  createPasien,
  deletePasien,
  updatePasien,
} = require("./user.service");

/* GET pasien listing. */
router.get("/pasien", async (req, res, next) => {
  try {
    const pasiens = await getAllPasiens();
    res.json({
      status: "success!!!",
      message: "list pasien",
      data: pasiens,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/pasien/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pasiens = await getPasienById(id);
    res.json({
      status: "success",
      message: "list pasien",
      data: pasiens,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//POST pasien
router.post("/pasien", async (req, res) => {
  try {
    const newPasien = await createPasien(req.body);
    res.status(201).json({
      status: "success",
      message: "pasien berhasil ditambahkan",
      data: newPasien,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//DELETE pasien
router.delete("/pasien/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await deletePasien(id);
    res.json({
      status: "success",
      message: "pasien berhasil dihapus",
      data: deleted,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//PUT pasien
router.put("/pasien/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await updatePasien(id, req.body);
    res.json({
      status: "success",
      message: "pasien berhasil diupdate",
      data: updated,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
