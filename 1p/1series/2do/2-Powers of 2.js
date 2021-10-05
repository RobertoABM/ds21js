//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
var n = parseInt(prompt("Eliga la potencia a la cual quiere elebar el número 2: "));

function PowersOf2(n) {
    var R = 1;
    for (let i = 0; i < n; i++) {
        R *= 2;       
    }
    return R;
}

console.log(PowersOf2(n));