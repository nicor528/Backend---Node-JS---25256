import express from "express"
import {
    getAllProducts,
    getProductById
} from "../controllers/products.controllers.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)


export default routes;