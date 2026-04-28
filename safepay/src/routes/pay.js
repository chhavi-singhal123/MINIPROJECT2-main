const express = require("express");
const router = express.Router();
const Dedup = require("../models/Dedup");
const policy = require("../../../dedup-policy.json");

// POST /api/pay
router.post("/", async (req, res) => {
  try {
    const { key, now } = req.dedup;

    // Simulated payment
    const txnId = "TXN" + Date.now();

    const response = {
      status: "success",
      txnId
    };

    // Save for dedup
    await Dedup.create({
      key,
      response,
      expiresAt: now + policy.windowSeconds
    });

    res.json(response);
  } catch (err) {
    console.error("Payment error:", err);
    res.status(500).json({ error: "Payment failed" });
  }
});

module.exports = router;
