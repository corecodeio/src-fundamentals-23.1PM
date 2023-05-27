const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 55

function sumArray(numbers) {
  // numbers = Array de numero
  // retornar la suma de todos los numeros dentro del Array
  // for = repetir instruccciones (iterar)
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(sumArray(arr));

//for (/* init */; /* condi */; /* steps */) {
// body

//}

// imprimir numeros del 1 al 30
// for (let i = 1; i <= 30; i = i + 1) {
//   // body
//   console.log(i);
// }
// for (let i = 1; i <= 30; i++) {
//   // body
//   console.log(i);
// }

// for (let i = 1; i <= 30; i = i + 2) {
//   // body
//   console.log(i);
// }
