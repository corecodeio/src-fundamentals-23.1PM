//for(/* init */;/* cond */;/* steps */) {
// body
//}

// while
// while(/* cond */) {
//     // body
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.clear();

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.clear();

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

console.log(sumArray([30, 1, 67, 3, 9]));
