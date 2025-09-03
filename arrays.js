let frutas = ["Pera", "Banana", "Manzana", "Frutilla"]
const verduras = ["Tomate", "Lechuga", "Cebolla"]

console.log(frutas)
//Leo un elemento con el index
console.log(frutas[0])
console.log("El largo del array es: " + frutas.length)

//agrego elementos al final y al inicio del array
frutas.push("Naranja")
frutas.unshift("Mandarina")
console.log(frutas)

//borro elementos del final e inicio del array
frutas.pop()
frutas.shift()
console.log(frutas)

/*
Metodos de transformación para arrays.
*/
// Unir el array de frutas en un string separado por comas
const frutasEnTexto = frutas.join("+ ");
console.log(frutasEnTexto)

// Pasar todas las frutas a mayúsculas con .map
const frutasEnMayus = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMayus); 

// Frutas que tienen más de 5 letras
const frutasLargas = frutas.filter(fruta => fruta.length > 5);
console.log(frutasLargas);

// Concatenar frutas y verduras en un solo string
const todos = frutas.concat(verduras);
const listaReducida = todos.reduce((acum, item) => acum + " | " + item);
console.log(listaReducida);

/*
ITERACIÓN CON ARRAYS
*/
// Mostrar cada fruta con forEach
frutas.forEach((fruta, index) => {
    console.log(`Fruta #${index + 1}: ${fruta}`);
});

// Mostrar cada verdura con for...of
for (const verdura of verduras) {
    console.log(`Verdura: ${verdura}`);
}