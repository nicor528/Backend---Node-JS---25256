console.log("1. Inicio"); // 1 → Se apila y se ejecuta en Call Stack

// Callback que tarda 2 segundos
setTimeout(() => {
  console.log("4. Timeout 2s terminado"); // 5 → Va a Callback Queue y luego al Call Stack
}, 2000);

// Callback que tarda 1 segundo
setTimeout(() => {
  console.log("3. Timeout 1s terminado"); // 4 → Va a Callback Queue y luego al Call Stack
}, 1000);

// Función síncrona
function sumar(a, b) {
  console.log("2. Sumando:", a + b); // 2 → Se ejecuta inmediatamente
}

sumar(5, 3);

console.log("Fin de la ejecución síncrona"); // 3 → Se ejecuta después de sumar
