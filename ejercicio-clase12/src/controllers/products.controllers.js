/*import {
    getAllProductsService,
    getProductByIdService
} from "../services/products.services.js"*/
import * as productService from "../services/products.services.js"

export const getAllProducts = async (req, res) => {
    try{
        console.log("paso1")
        const products = await productService.getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    }catch(error){
        res.status(500)
    }

};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product = await productService.getProductByIdService(id)
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500)
    }

};