//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
var n = parseInt(prompt("El rango para generar numeros aleatorios sea del 1 al "));
var Num = parseInt(prompt("¿Cuantos números aleatorios desea generar?"));
function Random(n) {
return Math.floor(Math.random() * (n - 1) + 1)
};
let NR =[];
for (let i = 0; i < Num; i++) {
    NR.push(Random(n));    
};

console.log(NR);
