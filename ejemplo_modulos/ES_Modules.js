//package.json:
/*
{
  "type": "module"
}
*/

//archivo math.js
// Exportar funciones
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

//archivo index.js
import { sumar, restar } from './math.mjs';

console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2