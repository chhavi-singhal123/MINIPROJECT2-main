require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const dedup = require("./middleware/dedup.js");
const payRoute = require("./routes/pay.js");

connectDB();

const app = express();
app.use(express.json());

app.use("/api/pay", dedup, payRoute);

app.listen(5000, () => console.log("SafePay running on port 5000"));
