require("dotenv").config();
const mongoose = require("mongoose");
const Dedup = require("../src/models/Dedup");

(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const now = Math.floor(Date.now() / 1000);

  const result = await Dedup.deleteMany({
    expiresAt: { $lt: now }
  });

  console.log(`🧹 Cleaned ${result.deletedCount} expired entries`);
  process.exit();
})();
