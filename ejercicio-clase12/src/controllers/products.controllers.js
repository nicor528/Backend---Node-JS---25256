/*import {
    getAllProductsService,
    getProductByIdService
} from "../services/products.services.js"*/
import * as productService from "../services/products.services.js"

export const getAllProducts = async (req, res) => {
    console.log("paso1")
    const products = await productService.getAllProductsService()
    console.log(products)
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProductByIdService(id)
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};