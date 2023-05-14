// variables
// Guarda un tipo de dato (Almacenamiento de datos)
// Caja
// Espacio de memoria reservado
// => Referencia a un valor guardado en memoria
// 3 Formas de definir una variables

// definicion de variable
var firstName;

// variable existe, pero no esta asignada (no tiene valor)
console.log(firstName);

// asignar variable
firstName = 'Yosef';

console.log(firstName);

////-----------

var firstName;

firstName = 'Yosef';
// variable existe, pero no esta asignada (no tiene valor)
console.log(firstName);

var lastName = 'Maldonado';

console.log(lastName);

lastName = 'Arriaga';

console.log(lastName);

lastName = 'Lorem';

console.log(lastName);

//------------------

// for
// CICLO
// PARA

//for ( /*variables*/ /*condicion*/ /*step*/ ){
  // cuerpo del for
//}

// let i = 45;

for (let i = 0; i <= 10; i = i + 1) {
  console.log(i);
}

console.log(i); // 45

//// hoisting

var i;

console.log(i);

i = 42;

console.log(i);
