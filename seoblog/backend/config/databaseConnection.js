const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/seoblog";
const dbConnection = async () => {
  mongoose
    .connect(MONGO_URI)
    .then((conn) => {
      console.log(`Database connected to ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = dbConnection;
