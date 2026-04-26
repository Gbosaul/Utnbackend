import { checkModelExist } from "../helpers/checkExist.js";
import Size from "../models/sizeModel.js";
import Product from "../models/productModel.js";

export const getAllSizeService = async () => {
    const sizes = await Size.find();
    return sizes;
}

export const createSizeService = async (sizeData) => {
    await checkModelExist(Size, { name: sizeData.name }, false, 400, `Size already exists`);
    
    const newSize = new Size(sizeData);
    const response = await newSize.save();
    return response;
}

export const deleteSizeService = async (id) => {
    await checkModelExist(Size, { _id: id }, true, 404, `Size not found`);

    const deleted = await Size.findByIdAndDelete(id);

    await Product.updateMany(
        { "variants.size": id },
        { $pull: { variants: { size: id } } }
    );

    return deleted;
}