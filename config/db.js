import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Instancia de Pool para conexión a base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

export default pool;
