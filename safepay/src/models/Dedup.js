const mongoose = require("mongoose");

const dedupSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  response: {
    type: Object,
    required: true
  },
  expiresAt: {
    type: Number,
    required: true
  }
});

// Export MODEL (not schema)
module.exports = mongoose.model("Dedup", dedupSchema);
