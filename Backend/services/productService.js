import { checkModelExist } from "../helpers/checkExist.js"
import Product from "../models/productModel.js"

export const createProductService = async (productData) => {

    const {name} = productData
    await checkModelExist(Product, {name}, false, 400, `Product ${name}`)
    
    const newProduct = new Product(productData)
    const savedProduct = await newProduct.save()

    return savedProduct
}

export const getAllProductService = async () => {
    
    const products = await Product.find()
        .populate({ path: "category", select: "name" })
        .populate({ path: "variants.color", select: "name hexCode" });
    return products;
}

export const updateProductService = async (id, productData) => {

    await checkModelExist(Product, {_id: id}, true, 404, `Product not found`)

    const updateProduct = await Product.findByIdAndUpdate(
        {_id: id},
        productData,
        { returnDocument: "after" }
    )

    return updateProduct
}

export const deleteProductService = async (id) => {

    await checkModelExist(Product, {_id: id}, true, 404, `Product not found`)

    const deleted = await Product.findByIdAndDelete(id)

    return { message: "Product deleted succesfully", data: deleted }
}

export const getProductByIdService = async (id) => {

    const product = checkModelExist(Product, {_id: id}, true, 404, `Product not found`)

    return product
}