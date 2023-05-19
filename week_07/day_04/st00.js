function addElements(arr) {
  arr.push(1);
  arr.push(2);
  arr.push(3);
}

function sum(a, b) {
  return a + b;
}

const arr = [];
addElements(arr);
// const result = sum(40, 2);
// arr.push(result);
arr.push(sum(40, 2));
console.log(arr);
