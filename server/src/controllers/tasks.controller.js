const pool = require("../db");

const getAllTasks = async (req, res) => {
  res.send("retrieven a lit of task");
};

const getTasks = (req, res) => {
  res.send("retrieving a single task");
};

const createTask = async (req, res) => {
  const { id, sku, name, stock, price } = req.body;
  console.log(id, sku, name, stock, price);
  const result = await pool.query(
    "INSERT INTO products (id, sku, name, stock, price) values($1,$2,$3,$4,$5)",
    [id, sku, name, stock, price]
  );
  console.log(result);
  res.send("creating a task");
};

const deleteTask = (req, res) => {
  res.send("deleting a task");
};

const updateTask = (req, res) => {
  res.send("updating a task");
};

module.exports = {
  getAllTasks,
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
