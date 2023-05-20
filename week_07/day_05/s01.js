const arr = [
  'Hola Mundo',
  90,
  true,
  [42, 3, 'Y', 80, 50, 'yo', 'Hola', 'Buenos dias'],
];

console.log(arr.length); // ['Hola Mundo', true, X];
// console.log(arr[arr.length - 1]); // [42, 3, 'Y', 'Buenos dias']

console.log(arr[arr.length - 1]); // Buenos dias
console.log(arr[arr.length - 1].length);
console.log(arr[arr.length - 1][arr[arr.length - 1].length - 1]);
