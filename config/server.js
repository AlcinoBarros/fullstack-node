const express = require("express");
const bosyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.static("./public"));
app.use(bosyParser.json());
app.use(cors());
app.use(routes);

module.exports = app;
