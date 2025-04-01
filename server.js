import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

// Instancia de Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Enrutador
app.use("/api", routes);

// Sirve archivos staticos
app.use(express.static("public"));

// Configurar puerto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
