function sum(a, b) {
  //  if (typeof a === 'number') {
  //     if (typeof b === 'number') {
  //       return a + b;
  //     } else {
  //       return 0;
  //     }
  //   } else {
  //     return 0;
  //   }

  return typeof a === 'number' ? (typeof b === 'number' ? a + b : 0) : 0;
}

console.log(sum(1, 1));
console.log(sum(12, '1'));
console.log(sum('A', 1)); // 0
console.log(sum('25', true)); // 0
console.log(sum(false, true)); //

function saleHotdogs(n) {
  //   if(n < 5) {
  //     return 100 * n;
  //   } else {
  //      if(n >= 5 && n < 10) {
  //        return 95 * n;
  //      } else {
  //        return 90 * n;
  //      }
  //   }

  //   if(n < 5) {
  //     return 100 * n;
  //   } else if(n >= 5 && n < 10) {
  //     return 95 * n;
  //   } else {
  //     return 90 * n;
  //   }

  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}
