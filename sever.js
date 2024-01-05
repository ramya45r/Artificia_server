const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const EcomCategoryRoute = require("./routes/EcomCategoryRoute");

const PORT = process.env.PORT;
const dotenv = require("dotenv").config();

const app = express();
const server = http.createServer(app);
//===============middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//==============cors
app.use(cors());

app.use("/api/category", EcomCategoryRoute);
// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
