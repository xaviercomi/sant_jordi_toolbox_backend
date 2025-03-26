import express from "express";
import { getAllCitas } from "../controllers/citasController.js";

const router = express.Router();

router.get("/", getAllCitas);

export default router;
