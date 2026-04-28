const crypto = require("crypto");

module.exports = (str) =>
  crypto.createHash("sha256").update(str).digest("hex");
