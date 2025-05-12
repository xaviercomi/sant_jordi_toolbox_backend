import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Instancia de Pool para conexión a base de datos
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: true,
  },
});

export default pool;
