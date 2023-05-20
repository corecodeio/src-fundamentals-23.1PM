// string
const str = 'Hola Mundo';
console.log(str.length); // caracteres dentro del string
console.log(str[0]); // H (indice 0 --> caracter H)
console.log(str.charAt(1)); // o (indice 1 --> caracter o)

// array
const arr = [];
console.log(arr.length); // elementos dentro del array
arr.push('Hola Mundo'); // agregar elementos dentro de array (al final del array)
arr[1] = true; // agregar elementos en una posicion especifica
console.log(arr[0]); // Hola Mundo (indice 0 --> string Hola Mundo)
console.log(arr[1]); // true (indice 1 --> boolean true)
arr.push([42, 3, 'Buenos dias']); // agregar un arreglo dentro del arreglo
console.log(arr); // ['Hola Mundo', true, [42, 3,'Y',  'Buenos dias']]
console.log(arr[2][3]); // Buenos dias
