require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/error.midleware")

const PORT = process.env.PORT || 5000;

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
//LTS
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e.message);
  }
};

start();
