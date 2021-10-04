console.time("Tiempo del programa");
var Array = [];
function Num_Alea() {
    return Math.floor(Math.random() * (1 + 10000 - 1) + 1);
}
for (let i = 0 ; i < 10000 ; i++){
Array.push(Num_Alea());
}

let Pasos = 0;
function Burbuja(ArryFinal) {
for (let R = 0; R < ArryFinal.length - 1; R++) {
    for (let Z = 0; Z < ArryFinal.length - 1; Z++){
        if (ArryFinal[Z] > ArryFinal[Z + 1]) {
            let AUX = ArryFinal[Z];
            ArryFinal[Z] = ArryFinal[Z + 1];
            ArryFinal[Z + 1] = AUX;
            Pasos++ 
        };
    };    
};
return ArryFinal;    
};

console.log(Array);

let Finalverdadero = Burbuja(Array);
console.log(Finalverdadero);
console.log("Los numero de pasos que realizo el algoritmo fue: "+ Pasos);
console.timeEnd("Tiempo del programa");
