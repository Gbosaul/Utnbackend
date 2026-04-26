import { Router } from "express";
import { createColor, deleteColor, getAllColors } from "../controllers/colorController.js";

const router = Router();

router.get("/", getAllColors);
router.post("/", createColor);
router.delete("/:id", deleteColor);

export default router;