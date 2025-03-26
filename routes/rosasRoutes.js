import express from "express";
import { getRosas } from "../controllers/rosasController.js";

const router = express.Router();

router.get("/", getRosas);

export default router;
