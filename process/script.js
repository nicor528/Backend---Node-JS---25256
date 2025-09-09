const argumentos = process.argv.slice(2)
console.log(argumentos)
const argumentos_sin_slice = process.argv
console.log(argumentos_sin_slice)

if(argumentos[0] == "saludar"){
    console.log("Hola", argumentos[1], argumentos[2])
}else if(argumentos[0] == "despedir"){
    console.log("Adios", argumentos[1], argumentos[2])
}else{
    console.log("Comando no reconocido")
}