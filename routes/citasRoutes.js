import express from "express";
import { getAllCitas } from "../controllers/citasController";

const router = express.Router();

router.get("/", getAllCitas);
