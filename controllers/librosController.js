import pool from "../config/db.js";

export const getLibros = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM libros_recomendados");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los libros");
  }
};
