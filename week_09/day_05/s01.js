// Array

const arr = [1, 2, 3, 4, 5, 6];
// arr2 = arr * 2 = [2, 4, 6, 8, 10, 12]
// console.log(arr) ==> [1, 2, 3, 4, 5, 6]
// console.log(arr2) ==> [2, 4, 6, 8, 10, 12]

// const arr2 = [];
// arr.forEach((n) => {
//   arr2.push(n * 2);
// });

// map
const arr2 = arr.map((n) => n * 2);

// console.log(arr);
// console.log(arr2);

const toDos = [
  { id: 'T00', description: 'wake up', done: true },
  { id: 'T01', description: 'eat', done: false },
  { id: 'T02', description: 'sleep', done: false },
];

const htmlList = toDos.map((todo) => {
  return `<li id="${todo.id}">
                  <span>${todo.description}<span>
                  <br>
                  <span>${todo.done ? 'Done' : 'Pendding'}<span>
              </li>`;
  // return (
  //   '<li id="' + todo.id + '"></li>' + '<span>' + todo.description + '</span >'
  // );
});

// console.log(htmlList);

// const fullName = (firstName, LastName) => {
//   // return firstName + ' ' + lastName
//   return `${firstName} ${LastName}`;
// };

// console.log(fullName('Yosef', 'Maldonado'));

const data = [
  { id: 'T00', description: 'wake up', done: true },
  { id: 'T01', description: 'eat', done: false },
  { id: 'T02', description: 'sleep', done: false },
];

// const descriptions = [];
// for (let i = 0; i < data.length; i++) {
//   descriptions.push(data[i].description);
// }

const descriptions = data.map((obj) => {
  return obj.description;
});

console.log(data);
console.log(descriptions);

// filter
// reduce
