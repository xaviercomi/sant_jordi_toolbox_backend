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

// Obtener las interacciones de un usuario
export const getInteraccionesUsuario = async (req, res) => {
  try {
    const { uuid } = req.params;

    // Adquiriendo el id del usuario con el uuid
    const userIDQuery = await pool.query(
      `SELECT id FROM usuarios WHERE uuid = $1`,
      [uuid]
    );

    if (userIDQuery.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const userID = userIDQuery.rows[0].id;

    // Adquiere todas las interacciones del usuario
    const result = await pool.query(
      ` SELECT 
    i.fecha_envio,
    i.destinatario_nombre,
    c.cita AS cita_texto,
    l.titulo AS libro_titulo,
    l.portada_url AS libro_imagen, 
    r.imagen_url AS rosa_imagen
  FROM interaccion i
  LEFT JOIN libros l ON i.libro_id = l.id
  LEFT JOIN rosas r ON i.rosa_id = r.id
  LEFT JOIN citas c ON i.cita_id = c.id
  WHERE i.usuario_id = $1
  ORDER BY i.fecha_envio DESC`,
      [userID]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener interacciones del usuario:", error);
    res.status(500).send("Error en la base de datos");
  }
};

// Agregar una nueva interacción
export const addInteraccion = async (req, res) => {
  try {
    const { uuid, destinatario_nombre, cita_id, rosa_id, libro_id } = req.body;

    const userId = await pool.query("SELECT id FROM usuarios WHERE uuid = $1", [
      uuid,
    ]);

    if (userId.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuario_id = userId.rows[0].id;

    const result = await pool.query(
      "INSERT INTO interaccion (usuario_id, destinatario_nombre, cita_id, rosa_id, libro_id) VALUES($1, $2, $3, $4, $5) RETURNING * ",
      [usuario_id, destinatario_nombre, cita_id, rosa_id, libro_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al agregar interacción", error);
    res.status(500).json({ error: "No se puede guardar la interacción" });
  }
};
