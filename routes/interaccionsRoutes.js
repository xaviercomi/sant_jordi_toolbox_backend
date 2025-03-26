import express from "express";
import {
  getAllInteracciones,
  addInteraccion,
} from "../controllers/interaccionsController.js";

const router = express.Router();

// Ruta para obtener todas las interacciones
router.get("/", getAllInteracciones);

// Ruta para agregar una nueva interacción
router.post("/", addInteraccion);

export default router;
