// PROBLEM 2
// removeAt(p)
//
// removes value at position p
// @arg {number} p - position
//
// @example
// removeAt(3)

var P = prompt("Eliga la posicion en la cual quiere eliminar el elemento del array: ");

let Array = [40, 123, 412, 43, 55, 10, 2, 4, 6, 80, 12, 25, 56, 399, 102, 233, 5034, 120, 12]

function insertAt(P) {
    return Array.splice(P, 1);
}
console.log("Anteriormente el Array era: " + Array);
insertAt(P);
console.log("Actualmente el Array es: " + Array);