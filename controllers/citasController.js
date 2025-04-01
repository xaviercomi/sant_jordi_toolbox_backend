import pool from "../config/db.js";

// Obtener todas las citas
export const getAllCitas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM citas_romanticas");
    res.json(result.rows);
  } catch (error) {
    console.log("Error al obtener citas: ", error);
    res.status(500).send("Error en la base de datos.");
  }
};
