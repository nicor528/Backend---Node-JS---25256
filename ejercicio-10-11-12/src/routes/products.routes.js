import express from 'express';
const router = express.Router();

router.get("/products", (req, res) => {
    res.send('Listado de productos');
})

router.get("/", (req, res) => {
    res.send("Ruta principal de products")
})

export default router