// objects
// repositorio de datos, representados por llave --> valor
const obj = {}; // objecto literal
console.log(obj);
// definir llaves dinamicamente (propiedades) del objeto
obj.name = 'Yosef'; // dot definition
console.log(obj);
obj['age'] = 27; // square brackets definition
console.log(obj);
// definir llaves estaticamente (propiedades) del objeto
let aNumber = 42;
const obj2 = {
  jobTitle: 'Fullstack developer',
  '1team': 'IT',
  myAge: aNumber,
  'another': 30
};
console.log(obj2);
// acceder al valor de las llaves
console.log(obj.name); // dot definition
console.log(obj['name']); // square brackets definition
console.log(obj2['1team']);
console.log(obj2['another']);
console.log(obj2.myAge)