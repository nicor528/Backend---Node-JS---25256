import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url)
console.log("__fileName: ", __fileName)
const __dirname = path.dirname(__fileName)
const filePath = path.join(__dirname, "db.json")

async function leerDB() {
    try{
        const data = fs.readFileSync(filePath, "utf-8")
        console.log(data)
        const products = await JSON.parse(data)
        console.log(products)
        return products
    }catch(error){
        console.log(error)
    }
}

async function escribirDB(products){
    const data = await JSON.stringify(products)

}

//leerDB()

export async function obtenerProductos(){
    const productos = await leerDB()
    console.log("capa de modelo: ", productos)
    return productos
}