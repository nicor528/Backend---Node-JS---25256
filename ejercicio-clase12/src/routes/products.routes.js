import express from "express"
import {
    addProduct,
    deleteProduct,
    editProduct,
    getAllProducts,
    getProductById
} from "../controllers/products.controllers.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create", addProduct)

routes.delete("/products/:id", deleteProduct)

routes.put("/products/:id", editProduct)

//routes.post("/products", )


export default routes;