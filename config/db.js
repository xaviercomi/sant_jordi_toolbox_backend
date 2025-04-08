import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Instancia de Pool para conexión a base de datos
const pool = new Pool({
  user: "app_user",
  host: "dpg-cvpv4mp5pdvs73egmlp0-a.frankfurt-postgres.render.com",
  database: "sant_jordi",
  password: "wUFCYd00P1Dsll5UromOo7FtN0kexL8k",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
