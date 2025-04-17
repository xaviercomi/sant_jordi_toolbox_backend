import express from "express";
import { getLibrerias } from "../controllers/libreriasController.js";

const router = express.Router();

router.get("/", getLibrerias);

export default router;
