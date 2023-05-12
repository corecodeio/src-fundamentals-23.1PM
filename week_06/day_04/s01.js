// funcion que no devuelve un valor: Procedimiento
// parametros: hola, p2, otro, yosef
// definicion de funcion
function miFuncioncita(hola, a4, otro, yosef) {
  console.log(hola, a4, otro, yosef);
}

// usar funcion
// Argumentos --> valores | variables que le envio a mi funcion
const x = 'hola que tal!';
miFuncioncita(5, x, true, 'bien gracias!!');

miFuncioncita(false, 20, 5);
miFuncioncita(false, 20, 5, null);

function printFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

printFullName('Yosef', 'Maldonado');
printFullName(5, 3);

// funciones que devuelven un valor

function sum(a, b) {
  let res = a + b;
  return res;
}

const miSuma = sum(50, 4);

console.log(miSuma);

// -----------

function mult(a, b) {
  return a * b;
}

let miMult = mult(42, 3);

console.log(miMult);

// -----------
function myStrangeName(name) {
  name = name + ' loremipsum';
  return name;
}

const miStrangeName = myStrangeName('yosef');
console.log(miStrangeName);
