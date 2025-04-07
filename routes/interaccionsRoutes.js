import express from "express";
import {
  getAllInteracciones,
  addInteraccion,
  getInteraccionesUsuario,
} from "../controllers/interaccionsController.js";

const router = express.Router();

// Ruta para obtener todas las interacciones
router.get("/", getAllInteracciones);

// Ruta para agregar una nueva interacción
router.post("/", addInteraccion);

// Ruta para obtener las interacciones de un usuario
router.get("/:uuid", getInteraccionesUsuario);

export default router;
