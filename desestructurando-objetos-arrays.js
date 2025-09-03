//Objetos
const persona = {
    nombre: "Nico",
    edad: 28,
    pais: "Argentina"
};

// Extraer propiedades con destructuring
const { nombre, edad } = persona;

console.log(nombre); // Nico
console.log(edad);   // 28


// También se puede renombrar
const { pais: paisNacimiento } = persona;
console.log(paisNacimiento); // Argentina

//Spread {...}

const direccion = {
  ciudad: "Buenos Aires",
  pais: "Argentina"
};

// Combinar objetos
const personaCompleta = { ...persona, ...direccion };

console.log(personaCompleta);
// { nombre: 'Nico', edad: 28, ciudad: 'Buenos Aires', pais: 'Argentina' }

// Copiar un objeto
const copiaPersona = { ...persona };
console.log(copiaPersona); // { nombre: 'Nico', edad: 28 }


//Arrays
const numeros = [10, 20, 30, 40];

// Extraer valores por posición
const [primero, segundo] = numeros;

console.log(primero);  // 10
console.log(segundo);  // 20

// Saltar elementos
const [, , tercero] = numeros;
console.log(tercero); // 30

//Spreads [...]
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Combinar arrays usando spread
const todosNumeros = [...numeros1, ...numeros2];

console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

// Copiar un array
const copiaNumeros = [...numeros1];
console.log(copiaNumeros); // [1, 2, 3]



