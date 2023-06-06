function calc(a, b, operation) {
  //   let result = 0;
  //   switch(operator) {
  //     case '+':
  //         result = operation(a,b);
  //       break;
  //     case '-':
  //       result = operation(a,b);
  //       break;
  //     case '*':
  //       result = operation(a,b);
  //       break;
  //     default:
  //       result = NaN;
  //   }
  return operation(a, b);
}

console.log(calc(1, 2, (x, y) => x + y));

function multiplicacion(w, z) {
  return w * z;
}

console.log(calc(4, 2, multiplicacion));
