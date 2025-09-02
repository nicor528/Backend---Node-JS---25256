//Funcion declarada

function saludar(){
    console.log("Hola1 !")
}
saludar()
console.log(saludar)
/////////////////////

//funcion expresada / anónima
const saludar2 = function () {
    console.log("Hola2 !!")
}
saludar2()
console.log(saludar2)
///////////

//funcion flecha
const saludar3 = () => {
    console.log("Hola3 !!")
}
saludar3()
console.log(saludar3)
////////

function suma (a , b) { //a y b son parámetros
    const resultado = a + b
    return resultado; //return devuelve un dato, si no se incluye un return devuelve "undefined"
}
const resultado = suma(10, 20)
console.log(suma(1,2)) //1 + 2 son Argumentos

/*
Higher Order Functions (HOF)
O CALLBACKS
*/

function calculadora(a,b,operacion){
    return operacion(a,b)
}

resultado_suma = calculadora(20,10, (a,b)=> a + b)
resultado_resta = calculadora(20,10, (a,b) => a - b)

console.log("Suma: " + resultado_suma)
console.log("Resta: " + resultado_resta)