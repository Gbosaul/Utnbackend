import express from 'express'
import { createProduct, deleteProduct, getProductById, getProductsByCategory, updateProduct } from '../controllers/productController.js'
import { getAllProduct } from '../controllers/productController.js'

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProduct)
router.get("/category/:categoryId", getProductsByCategory)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)


export default router