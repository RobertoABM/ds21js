//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var n = [];
n = parseInt(prompt("Eliga el número del cual quiera conocer sus numeros primos:"));
 
function sieve(n) {
    let A = [];
    let P = [];
    for (let i = 2; i <= n; i++) {
        if (!A[i]) {
            P.push(i);
            for (let j = i << 1; j <= n; j+= i) {
                A[j] = true;                
            }
        }
        
    }
 return P;
}

console.log(sieve(n));