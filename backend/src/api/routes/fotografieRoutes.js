import express from "express";
import { getFotos, postFotos, updateFotos, deleteFotos } from "../../controller/fotografieController.js";

const router = express.Router();

router.get("/fotos", getFotos);

router.post("/fotos", postFotos);

router.patch("/fotos/:id", updateFotos);

router.delete("/fotos/:id", deleteFotos);

export default router;
