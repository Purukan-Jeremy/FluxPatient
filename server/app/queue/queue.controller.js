const express = require("express");
const router = express.Router();
const service = require("./queue.service");

// Tambah antrian baru
router.post("/queue", async (req, res) => {
  try {
    const data = req.body;
    const saved = await service.addPatientToQueue(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ambil antrian aktif
router.get("/queue", async (req, res) => {
  try {
    const queue = await service.getQueueList();
    res.json(queue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Hapus antrian yang sudah expired
router.delete("/queue/expired", async (req, res) => {
  try {
    const result = await service.removeExpiredQueue();
    res.json({ message: "Expired queues removed", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
