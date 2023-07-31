const mongoose = require("mongoose");
const DATABASE_URI =
  process.env.DATABASE_URI_LOCAL || "mongodb://127.0.0.1:27017/seoblog";
const dbConnection = async () => {
  mongoose
    .connect(DATABASE_URI)
    .then((conn) => {
      console.log(`Database connected to ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = dbConnection;
