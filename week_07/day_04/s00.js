// string

const str = 'Hola Mundo';
//console.log(str); // Hola Mundo
//console.log(str.length); // 10
//console.log(str[0], str[9], str[10]); // H o undefined
//console.log(str.charAt(0), str.charAt(9), str.charAt(10)); // H o

// Arrays

const arr0 = [];
console.log(arr0);
console.log(arr0.length);
const arr1 = [45, true, 'Hola Mundo'];
console.log(arr1);
console.log(arr1.length); // 3
console.log(arr1[0]); // 45
console.log(arr1[2]); // Hola Mundo
console.log(arr1[arr1.length - 1]); // ultima posicion = Hola Mundo
const arr2 = [45, [1, 55, 'Qu tal', ['Y', 0]], 'Hola Mundo'];
console.log(arr2);
console.log(arr2.length);
console.log(arr2[1]);
// console.log(arr2[1[3[1]]])
console.log(arr2[1][3][1]);
const arr3 = [[34, 56], [55, 49, 0], [[12, [3]]], [4]];
console.log(arr3[2][0][1][0]); // 3

const users = [];
console.log(users);
// users[0] = 'Yosef';
// users[1] = 'Miguel';
// users[2] = 'Enrique';
// users[0] = 'Juan';
// users[2] = undefined;
// users[2] = null;
users.push('Yosef');
users.push('Miguel');
users.push('Enrique');
console.log(users);
users.pop();
console.log(users);
// lifo (last in first out)
