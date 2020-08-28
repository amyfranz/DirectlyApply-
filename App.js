const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("connected to database");
  }
);

//middleware
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

//Route Middleware
app.use("/users", authRoute);
app.use("/users", userRoute);

//ROUTES

app.listen(3000);
