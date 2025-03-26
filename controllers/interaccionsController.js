import pool from "../config/db.js";

// Obtener todas las interacciones
export const getAllInteracciones = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM interaccion ORDER BY fecha_envio DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener interacciones:", error);
    res.status(500).send("Error en la base de datos");
  }
};

// Agregar una nueva interacción
export const addInteraccion = async (req, res) => {
  try {
    const {
      usuario_id,
      destinatario_nombre,
      cita_id,
      rosa_id,
      libro_titulo,
      libro_autor,
      libro_imagen_url,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO interaccion (usuario_id, destinatario_nombre, cita_id, rosa_id, libro_titulo, libro_autor, libro_imagen_url) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
      [
        usuario_id,
        destinatario_nombre,
        cita_id,
        rosa_id,
        libro_titulo,
        libro_autor,
        libro_imagen_url,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al agregar interacción", error);
    res.status(500).json({ error: "No se puede guardar la interacción" });
  }
};
