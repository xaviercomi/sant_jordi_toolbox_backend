import express from "express";
import { addUsuario } from "../controllers/usuariosController.js";

const router = express.Router();

// Registrar usuario
router.post("/", addUsuario);

export default router;
