const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// cotrollers
const dataController = require("./controller/data.controller");
// routes
app.use("/", dataController);
module.exports = app;