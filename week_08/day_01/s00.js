// objetos
const obj1 = {};
const obj2 = { fullName: 'Yosef' };
obj2.lastName = 'Maldonado';
obj2.fullName = obj2.fullName + ' ' + obj2.lastName;
// console.log(obj2);

// const n = 5;
// const s = 'Yosef';
// const b = false;
// const obj = {};
// const arr = [];

// console.log(typeof n)
// console.log(typeof s)
// console.log(typeof b)
// console.log(typeof obj)
// console.log(typeof arr)

// condicionales
// evaluar condicion
// --> Ejecutar si condicion es verdadera
// --> (opcional) Ejecutar si condicion es falsa
function sum(a, b) {
  // si a es un numero y b tambien es un numero, entonces retorno el resultado de la suma
  // si ninguno de los dos es un numero, entonces retorno 0
  if (typeof a === 'number' && typeof b === 'number') {
    // si condicion es verdadera
    //console.log(a + ' es un numero!!!!!!!!!!!!!');
    // return a + b;
    // if (typeof b === 'number') {
    //   return a + b;
    // } else {
    //   return 0;
    // }
    return a + b;
  } else {
    // si condicion es falsa
    //console.log(a + ' no es un numero 🥲');
    return 0;
  }
}

console.log(sum(1, 1));
console.log(sum(12, '1'));
console.log(sum('A', 1)); // 0
console.log(sum('25', true)); // 0
console.log(sum(false, true)); // 0

// sum(1, 1);
// sum('A', 1); // 0
// sum('25', true); // 0
// sum(false, true);

// AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log('==============');

// OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log('==============');

// NOT
console.log(!true); // false
console.log(!false); // true
