// Exportar funciones
//archivo math.js
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

module.exports = { sumar, restar };

//archivo index.js (donde se importan)

const { sumar, restar } = require('./math');

console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2