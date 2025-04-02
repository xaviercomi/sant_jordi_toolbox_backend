import express from "express";

import { getLibros } from "../controllers/librosController.js";

const router = express.Router();

router.get("/", getLibros);

export default router;
