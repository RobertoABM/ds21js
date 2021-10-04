console.time("Tiempo del programa");
var Array = [];
function Num_Alea() {
    return Math.floor(Math.random() * (1 + 10000 - 1) + 1);
}
for (let i = 0 ; i < 10000 ; i++){
Array.push(Num_Alea());
}

function Swap(Arr, R, Z) {
    var temp = Arr[R];
    Arr[R] = Arr[Z];
    Arr[Z] = temp;
}

let Pasos = 0;
function Seleccion(ArryFinal) {
  var min, temp;
  for (let R = 0; R <= ArryFinal.length - 2; R++) {
      min = R;
      for (let Z = R + 1; Z <= ArryFinal.length -1; Z++) {
        if (ArryFinal[Z] < ArryFinal[min]) {
            min = Z;
            Pasos++;
        };         
      };
      Swap(ArryFinal, R, min);
  };
  return ArryFinal;
};

console.log(Array);
let Finalverdadero = Seleccion(Array);
console.log(Finalverdadero);
console.log("Los numero de pasos que realizo el algoritmo fue: "+ Pasos);
console.timeEnd("Tiempo del programa");
