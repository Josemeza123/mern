import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};
export const getTask = (req, res) => {
  res.send("obteniendo una tarea");
};
export const createTasks = async (req, res) => {
  const { title, descripcion } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, descripcion) VALUES ( ?, ?)",
    [title, descripcion]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    descripcion,
  });
};
export const updateTasks = (req, res) => {
  res.send("actualizando tarea");
};
export const deleteTasks = (req, res) => {
  res.send("eliminando tarea");
};
