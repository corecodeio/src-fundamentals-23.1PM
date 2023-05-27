// case (switch)

// const color = '#asdfaA';
// const obj = {};

// if (color === '#asdfaf') {
//   obj.class = 'red';
// } else if (color === '#asdfaA') {
//   obj.class = 'green';
// } else if (color === '#QADE') {
//   obj.class = 'black';
// } else if (color === '#19KD2') {
//   obj.class = 'orange';
// } else {
//   obj.class = 'white';
// }

// console.log(obj);

const color = '#asdfaA';
const obj = {};

// switch (color) {
//   case '#asdfaf': {
//     obj.class = 'red';
//     break;
//   }
//   case '#asdfaA': {
//     obj.class = 'green';
//     break;
//   }
//   case '#QADE': {
//     obj.class = 'black';
//     break;
//   }
//   case '#19KD2': {
//     obj.class = 'orange';
//     break;
//   }
//   default: {
//     obj.class = 'white';
//   }
// }

switch (color) {
  case '#asdfaf':
    obj.class = 'red';
    break;
  case '#asdfaA':
    obj.class = 'green';
    break;
  case '#QADE':
    obj.class = 'black';
    break;
  case '#19KD2':
    obj.class = 'orange';
    break;
  default:
    obj.class = 'white';
}

console.log(obj);
