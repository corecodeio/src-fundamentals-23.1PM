// map
// funcion sobre los Arrays
// devuelve un Array Nuevo
// recibe una funcion

// [A] --> Map(F) --> *[A]

const arr = [5, 2, 1, 10, 9];
// E1 = arr * 2 = [10, 4, 2, 20, 18]
// E2 = arr * arr = [25, 4, 1, 100, 81]
const duplicate = (e) => e * 2;
const multiply = (e) => e * e;
// E1
const resultArr1 = [];
for (let i = 0; i < arr.length; i++) {
  resultArr1.push(duplicate(arr[i]));
}
console.log(resultArr1);
// E2
const resultArr2 = [];
for (let i = 0; i < arr.length; i++) {
  resultArr2.push(multiply(arr[i]));
}
console.log(resultArr2);
