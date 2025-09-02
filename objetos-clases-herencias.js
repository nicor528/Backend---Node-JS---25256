// Clase base
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Clase derivada (herencia)
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // llama al constructor de la clase base
        this.curso = curso;  // nueva propiedad específica
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}.`);
    }
}

// Crear instancias
const estudiante1 = new Estudiante("Nico", 28, "Node.js");
const estudiante2 = new Estudiante("Ana", 25, "JavaScript");

// Usar métodos
estudiante1.saludar(); // Hola, me llamo Nico y tengo 28 años.
estudiante1.estudiar(); // Nico está estudiando Node.js
estudiante2.saludar(); // Hola, me llamo Ana y tengo 25 años.
estudiante2.estudiar(); // Ana está estudiando JavaScript
