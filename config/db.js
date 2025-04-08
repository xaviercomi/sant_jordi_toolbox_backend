import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Instancia de Pool para conexión a base de datos
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
