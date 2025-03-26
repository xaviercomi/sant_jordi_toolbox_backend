import pool from "../config/db.js";

// Registrar usuario
export const addUsuario = async (req, res) => {
  try {
    const { uuid, nombre } = req.body;

    if (!uuid || !nombre) {
      return res.status(400).json({ error: "Requiere nombre y UUID" });
    }

    // Verificar si existe usuario
    const userExist = await pool.query(
      "SELECT * FROM usuarios WHERE uuid = $1",
      [uuid]
    );
    if (userExist.rows.length > 0) {
      return res.status(200).json(userExist.rows[0]);
    }

    // Insertar nuevo usuario con UUID
    const result = await pool.query(
      "INSERT INTO usuarios (uuid, nombre) VALUES ($1, $2) RETURNING *",
      [uuid, nombre]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "No se puede registrar al usuario" });
  }
};
