require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbConnection = require("./config/databaseConnection.js");
const blogRoutes = require("./routes/blog.js");
const authRoutes = require("./routes/auth.js");

/*creates a new express*/
const app = express();

/* db connection  */
dbConnection();
/* middle ware */

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

/* cors */
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
