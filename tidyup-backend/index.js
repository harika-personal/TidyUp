// tidyup-backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const app2 = express();
const PORT = process.env.PORT || 5050;
const PORT2 = 5070;

// middlewares
app.use(cors());
app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("TidyUp backend is running ✅ ");
});
app2.get("/", (req, res) => {
  res.send("Second backend is running ✅ too ");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app2.listen(PORT2, () => console.log(`Server running on port ${PORT2}`));