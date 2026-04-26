import { Router } from "express";
import { createSize, deleteSize, getAllSizes } from "../controllers/sizeController.js";

const router = Router();

router.get("/", getAllSizes);
router.post("/", createSize);
router.delete("/:id", deleteSize);

export default router;