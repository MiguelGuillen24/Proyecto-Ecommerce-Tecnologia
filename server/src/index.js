const express = require("express");
const morgan = require("morgan");

const taskRoutes = require("./routes/tasks.routes");

const sequelize = require("../database/database");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

app.listen(3000, async () => {
  console.log("Server on port 3000");

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
