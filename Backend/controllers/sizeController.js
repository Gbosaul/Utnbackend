import { createSizeService, deleteSizeService, getAllSizeService } from "../services/sizeService.js"
import { handleError } from "../utils/errorHandler.js"

export const getAllSizes = async (req, res) => {
    try {
        const sizes = await getAllSizeService();
        res.status(200).json(sizes);
    } catch (error) {
        handleError(error, res);
    }
}

export const createSize = async (req, res) => {
    try {
        const sizeData = req.body;
        const newSize = await createSizeService(sizeData);
        res.status(201).json(newSize);
    } catch (error) {
        handleError(error, res);
    }
}

export const deleteSize = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteSizeService(id);
        res.status(200).json(deleted); 
    } catch (error) {
        handleError(error, res);
    }
}