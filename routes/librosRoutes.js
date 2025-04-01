import express from "express";

import { getLibros } from "../controller/librosController.js";

const router = express.Router();

router.get("/", getLibros);

export default router;
