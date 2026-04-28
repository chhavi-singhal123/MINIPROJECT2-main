const crypto = require("crypto");
const Dedup = require("../models/Dedup");
const policy = require("../../../dedup-policy.json");
const filter = require("../utils/bloom");

module.exports = async (req, res, next) => {
  try {
    let key = req.headers["idempotency-key"];

    // Auto-generate if missing
    if (!key) {
      key = crypto
        .createHash("sha256")
        .update(req.originalUrl + JSON.stringify(req.body))
        .digest("hex");
    }

    const now = Math.floor(Date.now() / 1000);

    // ALWAYS check DB first (source of truth)
    const record = await Dedup.findOne({ key });

    if (record && record.expiresAt > now) {
      return res.json(record.response); // cached
    }

    // Add to bloom for faster next lookup
    filter.add(key);

    req.dedup = { key, now };
    next();
  } catch (err) {
    console.error("Dedup middleware error:", err);
    next();
  }
};
