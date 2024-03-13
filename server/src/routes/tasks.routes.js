const { Router } = require("express");
const pool = require("../db");
const {
  showAllProducts,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controller");

const router = Router();

//CRUD

router.get("/tasks", getAllTasks);

router.get("/tasks/10", showAllProducts);

router.post("/tasks", createTask);

router.delete("/tasks", deleteTask);

router.put("/tasks", updateTask);

module.exports = router;
