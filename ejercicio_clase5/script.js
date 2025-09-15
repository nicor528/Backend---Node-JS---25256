console.log("programa iniciado")

const argumentos = process.argv.slice(2)

if(argumentos[0] == "GET"){
    console.log("Toma un dato")
}else if(argumentos[0] == "POST"){
    console.log(`Recibimos ${argumentos[1]} satisfactoriamente`)
}else if(argumentos[0] == "PUT"){
    console.log(`Modificamos el item con id: ${argumentos[1]} satisfactoriamente`)
}else if(argumentos[0] == "DELETE"){
    console.log(`El item con el id: ${argumentos[1]} se eliminó con éxito`)
}else{
    console.log("Comando no reconocido")
}