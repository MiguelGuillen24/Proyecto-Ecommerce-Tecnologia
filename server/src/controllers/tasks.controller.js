const pool = require("../db");
const Product = require("../models/database_model");

const getAllTasks = async (req, res) => {
  res.send("retrieven a lit of task");
};

const showAllProducts = async (res) => {
  try {
      const products = await Product.findAll();
      console.log('Registros en la tabla Products:');
      products.forEach(product => {
          console.log(product.toJSON());
      });
  } catch (error) {
      console.error('Error al mostrar los registros de la tabla Products:', error);
  }
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
  showAllProducts,
  createTask,
  deleteTask,
  updateTask,
};
