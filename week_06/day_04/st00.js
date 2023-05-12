function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function calc(a, b) {
  let resultSum = sum(a, b);
  let resultSub = sub(a, b);
  let resultMult = mult(a, b);
  let result = resultSum + ' ' + ' ' + resultSub + ' ' + resultMult;
  return result;
}

const calcResult = calc(3, 4);
console.log(calcResult);
