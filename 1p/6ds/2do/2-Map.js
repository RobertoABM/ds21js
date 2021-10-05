// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

var start = new Date();
const Random = new Map()

for (let i = 0; i < 7; i++) {
    
    for (let o = 0; o < 100000; o++) {        
        Random.set(o, "Name" + (Math.floor(Math.random()*(100000-1) + 1)));
    }    
}
var end = new Date();
var Tiempo = ((end - start) / 7);
console.log(Random);
console.log("El tiempo promedio para las 7 ejecuciones es de : " + (Tiempo )+ " milisegundos");