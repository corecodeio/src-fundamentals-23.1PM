// forEach

// arrow function

function sum1(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

// a++  ==> a, a = a + 1 (post increment)
// ++a ==> a = a + 1, a (pre increment)

const increment1 = (a) => ++a;

function increment2(a) {
  return ++a;
}

// console.log(sum1(1, 2));
// console.log(sum2(1, 2));
// console.log(sum3(1, 2));
// console.log(increment1(1));
// console.log(increment2(1));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function printNumbers(n) {
//   console.log(n);
// }
// arr.forEach(printNumbers);

// arr.forEach((n) => {
//   console.log(n);
// });

// ternary operator (condicional)
// N % 2 === 0 (par) , ELSE (impar)

arr.forEach((n) => {
  //   if (n % 2 === 0) {
  //     console.log(n);
  //   }
  // (condi) ? <verdadero> : <falso>

  n % 2 === 0 ? console.log(n) : null;
});

let val = arr[0] % 2 === 0 ? 'isOdd' : 'isEven';

console.log(val);

let val2;
if (arr[0] % 2 === 0) {
  val2 = 'isOdd';
} else {
  val2 = 'isEven';
}

let color = 'rgb#1234';
let colorId;
if (color.indexOf('rgb') !== -1) {
  let id = color.substring(color.indexOf('#') + 1);
  if (id === '123') {
    colorId = true;
  } else {
    colorId = false;
  }
}

console.log(colorId);
