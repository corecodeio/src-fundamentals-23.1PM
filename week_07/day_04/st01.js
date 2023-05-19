let obj1 = new Object();
let obj2 = {};

let animal = { name: 'dog' };
animal.name = 'cat';
animal['name'] = 'rabbit';

console.log(animal);

let obj = { name: 'dog', legs: 4, color: 'white' };
console.log(obj.name, obj['name']);
console.log(obj.legs, obj['legs']);
console.log(obj.color, obj['color']);
