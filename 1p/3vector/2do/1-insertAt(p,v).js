// PROBLEM 1
// insertAt(p,v)
//
// inserts a value v, at position p, in the array
// @arg {number} p - position
// @arg {number} v - value
//
// @example
// insertAt(3,3)
// Verify operation result by outputing the array before and after

var P = prompt("Eliga la posicion en la cual quiere agregar el nuevo objeto al Array: ");

var V = prompt("Eliga el valor que quiere ingresar en esa posición: ");

let Array = [100, 123, 23, 53, 123, 239, 102, 1, 23, 543, 56, 674, 129, 121, 1, 2, 54, 6, 7, 8, 10]

function insertAt(P, V) {
    return Array.splice(P, 0, V);
}
console.log("Anteriormente el Array era: " + Array);
insertAt(P,V);
console.log("Actualmente el Array es: " + Array);