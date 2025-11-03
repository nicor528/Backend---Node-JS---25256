/*const products = [
  { id: 1, name: 'Producto 1', price: 1000 },
  { id: 2, name: 'Producto 2', price: 2000 },
];*/

import {
  obtenerProductos
} from "../models/products.models.js"

export const getAllProductsService = async () => {
  console.log("test2 dentro de servicio")
  const products = await obtenerProductos()
  return products;
};

export const getProductByIdService = async (id) => {
    const products = await obtenerProductos()
    console.log("buscando error ", products)
    return products.find(product => product.id == id);
};