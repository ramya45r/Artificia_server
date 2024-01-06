const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const CategoryRoute = require("./routes/CategoryRoute");
const dbconfig = require("./config/db");

const PORT = process.env.PORT;
// app.js or index.js
require('dotenv').config();

const app = express();
const server = http.createServer(app);
//===============middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//==============cors
app.use(cors());

app.use("/api/category", CategoryRoute);
// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
