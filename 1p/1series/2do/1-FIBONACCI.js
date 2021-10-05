//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
var n = parseInt(prompt("Eliga el número de elementos que desa ver de la secuencia Fibonacci"));

function Fibonacci(n) {
    let Array = [1,1];
    for (let i = 2; i <=n ; i++) {
           Array[i] = Array[i - 2] + Array[i - 1];       
    }
    return Array;
}

console.log(Fibonacci(n));
