const persona_1 = {
    nombre: "Nico",
    edad: 28,
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// Usar la función dentro del objeto
persona_1.saludar();

// Función constructora
function Persona(nombre, edad) {
    this.nombre = nombre; // propiedad
    this.edad = edad;     // propiedad
    this.saludar = function() { // método
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Crear una instancia
const persona1 = new Persona("Nico", 28);
const persona2 = new Persona("Ana", 25);

// Usar los métodos
persona1.saludar(); // Hola, me llamo Nico y tengo 28 años.
persona2.saludar(); // Hola, me llamo Ana y tengo 25 años.

