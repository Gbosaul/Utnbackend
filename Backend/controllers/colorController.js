import { createColorService, deleteColorService, getAllColorService } from "../services/colorService.js"
import { handleError } from "../utils/errorHandler.js"

export const getAllColors = async (req, res) => {
    try {
        const colors = await getAllColorService();
        res.status(200).json(colors);
    } catch (error) {
        handleError(error, res);
    }
}

export const createColor = async (req, res) => {
    try {
        const colorData = req.body;
        const newColor = await createColorService(colorData);
        res.status(201).json(newColor);
    } catch (error) {
        handleError(error, res);
    }
}

export const deleteColor = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteColorService(id);
        res.status(200).json(deleted); 
    } catch (error) {
        handleError(error, res);
    }
}