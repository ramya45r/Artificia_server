const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;
// onstaraapp
connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

