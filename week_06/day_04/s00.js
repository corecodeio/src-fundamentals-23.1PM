// equality operator (==) ------------> boolean
// strict equality operator (===) --------> boolean

// Asignación: (=)
const x = 5;

// equality operator (Type coercion => 'default')
const res00 = 5 == 5;
const res01 = '42.0' == 42;
const res02 = 1 == true;
const res03 = '' == false;

console.log(res00, res01, res02, res03);

console.log('================================');

const res04 = 5.0 === 5;
const res05 = '42' === 42;
const res06 = 1 === true;
const res07 = '' === false;

console.log(res04, res05, res06, res07);

// enviar post: (numero son decimales 'flotantes')
console.log(3.1 + 0.2);

// javascript behaviours
console.log('3.2' + '5');
console.log('3.2' + 5);
console.log('3.2' - 5);
