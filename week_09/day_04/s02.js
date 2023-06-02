const arr = [1, true, [4, 2], 'hola']; // Array

// for
// for of
// while
// do while
// forEach

function print(e) {
  console.log(e);
}

function print2(x, as, f) {
  console.log(x);
}

arr.forEach(print2);

const arr2 = [1, 2, 3, 4, 5];

function sumArr(a) {
  let res = 0;
  for (const n of a) {
    res = res + n;
  }
  return res;
}

console.log(sumArr(arr2));

//-----

let res = 0;

function sumHelper(n) {
  res = res + n;
}

function sumArr2(arr, f) {
  arr.forEach(f);
  return res;
}
console.log(sumArr2(arr2, sumHelper));
