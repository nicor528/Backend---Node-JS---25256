/*const products = [
  { id: 1, name: 'Producto 1', price: 1000 },
  { id: 2, name: 'Producto 2', price: 2000 },
];*/

import {obtenerProducto, obtenerProductos} from "../models/products.models.js"

export const getAllProductsService = async () => {
  return(
    new Promise(async (res,rej)=> {
      console.log("test2 dentro de servicio")
      try{
        const productos = await obtenerProductos()
        res(productos);
      }catch(error){
        rej()
      }
    })
  )
};

export const getProductByIdService = async (id) => {
  return(
    new Promise(async(res, rej) => {
      try{
        const product = await obtenerProducto(id)
        res(product)
      }catch(error){
        rej(error)
      }
    })
  )
};