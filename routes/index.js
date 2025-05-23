import express from "express";
import usuariosRoutes from "./usuariosRoutes.js";
import interaccionsRoutes from "./interaccionsRoutes.js";
import citasRoutes from "./citasRoutes.js";
import rosasRoutes from "./rosasRoutes.js";
import librosRoutes from "./librosRoutes.js";
import libreriasRoutes from "./libreriasRoutes.js";

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/interacciones", interaccionsRoutes);
router.use("/citas", citasRoutes);
router.use("/rosas", rosasRoutes);
router.use("/libros", librosRoutes);
router.use("/librerias", libreriasRoutes);

export default router;
