import { checkModelExist } from "../helpers/checkExist.js";
import Color from "../models/colorModel.js";
import Product from "../models/productModel.js";

export const getAllColorService = async () => {
    const colors = await Color.find();
    return colors;
}

export const createColorService = async (colorData) => {
    await checkModelExist(Color, { name: colorData.name }, false, 400, `Color already exists`);
    
    const newColor = new Color(colorData);
    const response = await newColor.save();
    return response;
}

export const deleteColorService = async (id) => {
    await checkModelExist(Color, { _id: id }, true, 404, `Color not found`);

    const deleted = await Color.findByIdAndDelete(id);

    await Product.updateMany(
        { "variants.color": id },
        { $pull: { variants: { color: id } } }
    );

    return deleted;
}