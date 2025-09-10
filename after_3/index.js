import { fileURLToPath } from "url";
import path from "path";
import fs from "fs"

const __fileName = fileURLToPath(import.meta.url)
console.log("__fileName: ", __fileName)
const __dirname = path.dirname(__fileName)

console.log("Ruta absoluta del archivo: ", __dirname)

const filePath = path.join(__dirname, "datos.txt")
console.log("Ruta a la data: ", filePath)

fs.readFile(filePath, "utf8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log("Data cruda: ",data)
        const lineas = data.trim().split("\r\n")
        const headers = lineas[0].split(",")
        console.log(lineas, headers)

        const lineas_sin_header = lineas.slice(1)
        const usuarios = lineas_sin_header.map(usuario => {
            const datos = usuario.split(",")
            console.log(datos)
            let objeto = {}
            headers.forEach((header, indice) => {
                objeto[header] = datos[indice]
            })
            console.log(objeto)
            return objeto
        })

        console.log(usuarios)
    }
})