const pool = require("../models/db");

const createTODO = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING * ", //R* used when CUD
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const getTODO = async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");

    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getTODOById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query("SELECT * FROM todo WHERE t_id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const updateTODO = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedToDo = await pool.query(
      "UPDATE todo SET description = $1 WHERE t_id = $2 RETURNING *",
      [description, id]
    );

    res.json(updatedToDo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteTODO = async (req, res) => {
  try {
    const { id } = req.params;

    pool.query("DELETE FROM todo WHERE t_id = $1", [id]);

    res.json("deleted!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createTODO,
  getTODO,
  getTODOById,
  updateTODO,
  deleteTODO,
};
