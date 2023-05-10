// Sabado
// variables
// let, const, var (no recomendado)
// hoisting, (definicion, asignacion)
// Operador asignación: =
// variables solo se defined una vez

const firstName = 'Yosef';

// [let, const, var] <nombreDeVariable> = <valorAAsignar>;

// Output (consola)
// console.log(<valorAImprimir>)
// console.log(<valorAImprimir>,<valorAImprimir>,<valorAImprimir>)

console.log(firstName, 'Maldonado', 42);

//** video github

// Tipos de datos en Javascript (Primitivos)
// string
const str0 = "34";
const str1 = 'Hola';
const str2 = `Otro string...`;

// boolean
const bool0 = true;
const bool1 = false;

// number (Number.MAX_VALUE)
const number00 = 9;
const number01 = 42.1;
const number02 = -400;
const number03 = -400.5;
const number04 = Number.MAX_VALUE;

// null
const null00 = null;

// undefined
let undefined00;
const undefined01 = undefined;

// Examples:

let x;
x = 'Hola que tal!';
x = 42.3;
x = false;
x = null;
x = 'Bien gracias!!';

console.log(x);

let X = 'Otro valor!!';

console.log(X);

///

let xx;
// x = 'Hola que tal!';
p = 42.3;
// x = false;
// x = null;
// x = 'Bien gracias!!';

console.log(p);

let XX = 'Otro valor!!';
console.log(P);

///

// == (comparacion debil)
// === (comparacion fuerte)

const res00 = '34' == '34';
const res01 = '42' == `42`;
console.log(res00);
console.log(res01);

const res02 = true == false;
const res03 = false == false;
console.log(res02);
console.log(res03);

const res04 = 10 == 10.1;
const res05 = 43 == 43;
console.log(res04);
console.log(res05);

const res06 = 10 == '10';
const res07 = 0 == false;
const res08 = 1 == true;
console.log(res06);
console.log(res07);
console.log(res08);

const res09 = 10 === '10';
const res10 = 0 === false;
const res11 = 1 === true;
const res12 = 1 === 10;
console.log(res09);
console.log(res10);
console.log(res11);
console.log(res12);
