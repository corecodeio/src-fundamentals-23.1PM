// type coercion
function yosef(a, b) {
  return a - b;
}

const result0 = yosef(2, 'Hola!');

console.log(result0);

//console.log(2 - NaN)

// type coercion
function yosef(a, b) {
  return a - b;
}

const result = yosef(2, 'Hola!');

console.log(result);

//console.log(2 - NaN)

function mult(a, b) {
  return a * b;
}

const result2 = mult(4, 3);

console.log(result2);

function concatStr(a, b) {
  return a + b;
}

let firstName;

const result3 = concatStr('Hola ', firstName);

console.log(result3);
