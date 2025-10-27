import express from "express"

const routes = express.Router()

routes.get("/products", (req, res) => {
    res.send("todos los productos")
})


export default routes;