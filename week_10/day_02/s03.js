const arr = [20, 1, 4, 5, 66, 2, 100];
const users = [{ age: 18 }, { age: 81 }, { age: 21 }, { age: 42 }];

// // E1
// const result1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 10) {
//     result1.push(arr[i]);
//   }
// }
// console.log(result1);

// // E2
// const result2 = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 21) {
//     result2.push(users[i]);
//   }
// }
// console.log(result2);

// const myFilter = (arr, condition) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (condition(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const result1 = myFilter(arr, (n) => n >= 10);
// console.log(result1);

// const result2 = myFilter(users, (obj) => obj.age > 21);
// console.log(result2);

const result1 = arr.filter((n) => n >= 10);
console.log(result1);

const result2 = users.filter((obj) => obj.age > 21);
console.log(result2);

// callBack
// --> elemento
// --> indice
// --> arreglo original
