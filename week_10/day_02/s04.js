const numbers = [2, 4, 8, 10, 12, 14, 16, 7];

let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  acc = acc + numbers[i];
}
console.log(acc);

// numbers.reduce(/*callback*/, /*valorInicial*/);

// callBack
// --> acumulador
// --> valor actual
// --> indice
// --> arreglo original
const resultReduce1 = numbers.reduce((acc, e) => acc + e);
console.log(resultReduce1);

// reglas:
// si existe valorInicial
// ---> acc = valorInicial
// ---> e = A[0]
// si no existe valorInicial
// ---> acc = A[0]
// ---> e = A[1]

const resultReduce2 = numbers.reduce((acc, e) => `${acc}-${e}`);
console.log(resultReduce2);

const resultReduce3 = numbers.reduce((acc, e) => {
  acc.push(e * 3);
  return acc;
}, []);
console.log(resultReduce3);
