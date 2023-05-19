// const x = 5;
// x = x + 1;

// console.log(x);

const arr = [];
arr[0] = 'yosef';
arr.push('juan');

const brr = arr;

console.log(arr);
console.log(brr);

arr.push('Otro nombre');

console.log(arr);
console.log(brr);

// -------------------------------------

function changeArray(value) {
  value.push(4);
}

const numbers = [1, 2, 3];
changeArray(numbers);
console.log(numbers);
