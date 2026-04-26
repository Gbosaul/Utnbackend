import { createProductService, deleteProductService, getAllProductService, getProductByIdService, updateProductService } from "../services/productService.js"
import { handleError } from "../utils/errorHandler.js"
import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const productData = req.body
        const savedProduct = await createProductService(productData)
        res.status(201).json(savedProduct)
    } catch (error) {
       handleError(error, res)
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const products = await getAllProductService()
        res.status(200).json(products)
    } catch (error) {
        handleError(error, res)
    }
}

export const updateProduct = async (req, res) => {
    try {
       const { id } = req.params
       const productData = req.body

       const updatedProduct = await updateProductService(id, productData)

       res.status(201).json(updatedProduct)

    } catch (error) {
        handleError(error, res)
    }
}

export const deleteProduct = async (req, res) => {
    try {
    const {id} = req.params
    const response = await deleteProductService(id)
    res.status(201).json(response)
    } catch (error) {
         handleError(error, res)
    }
}

export const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await getProductByIdService(id)
        res.status(200).json(product)

    } catch (error) {
        handleError(error, res)
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId })
            .populate("category")
            .populate("variants.color");

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al filtrar", error: error.message });
    }
}