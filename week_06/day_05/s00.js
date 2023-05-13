// strings

// str position

const str = 'C0r3-code';
console.log(str[0], str[1], str[2], str[3]);

const otherStr = 'William';
console.log(otherStr[1] + otherStr[4]);
console.log(otherStr[1] + otherStr[1]);
console.log(otherStr[4] + otherStr[4]);

// length : cuantos caracteres tiene un string

console.log(str, str.length);

// concatenar
// +
const str00 = 'Hola';
const str01 = 'que tal?';
console.log(str00 + ' ' + str01);
// concat()
const str02 = 'Hola';
const str03 = 'que tal?';
console.log(str02.concat(' ').concat(str03));
console.log(str02.concat(' ', str03));
// includes()
const str04 = 'lorem ipsum Yosef, core-code, Dog, fundamentals';
const existInString1 = str04.includes('Yosef'); // este string existe dentro del string str04?
const existInString2 = str04.includes('Yosef', 10); // este string existe dentro del string str04, a partir de la posicion 10?
console.log(existInString1);
console.log(existInString2);
// split()
const str05 = 'Hola muy buenos dias, como esta?, espero que este bien, gracias';
const cake1 = str05.split(' ');
console.log(cake1[3]);
const cake2 = str05.split('');
console.log(cake2[7]);
// charAt()
const st06 = 'C0r3-code';
//console.log(st06[0], st06[1], st06[2], st06[3]);
console.log(st06.charAt(0), st06.charAt(1), st06.charAt(2), st06.charAt(3));
console.log(st06, st06.length);
console.log(st06[8]);

const st07 =
  'C0r3-code, askdfjalsdkfj asdf, asdfasdf asdfjsd, afsdfasdf asdf, w';

// console.log(st07.length - 1);
console.log(st07[st07.length - 1]); // w
console.log(st07[st07.length - 4]); // f

//indexOf()
const str08 = 'lorem ipsum Yosef, core-code, Dog, fundamentals';
const posO = str08.indexOf('Yosef');
const pos1 = str08.indexOf('o', 2);
const pos2 = str08.indexOf('Ivan');
console.log(posO);
console.log(pos1);
console.log(pos2);
