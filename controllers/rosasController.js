import pool from "../config/db.js";

export const getRosas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM rosas");
    req.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las rosas");
  }
};
