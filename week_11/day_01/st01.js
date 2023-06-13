// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]

// Input: [false, 1, 0, 1, 2, 0, 1, 3, 'a']
// Output: [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  // output = [0,0] ** MAGIA (FILTER) ✅
  // ** MAGIA (FOR)
  // arr = [false, 1, 1, 2, 1, 3, 'a']✅
  // ** MAGIA (FOR)
  // arr.push(0)
  // arr.push(0)
  // arr = [false, 1, 1, 2, 1, 3, 'a', 0, 0]✅
  const zeros = arr.filter((el) => el === 0);
  const noZeros = arr.filter((el) => el !== 0);
  //   zeros.forEach((zero) => {
  //     noZeros.push(zero);
  //   });
  //   return noZeros;
  return noZeros.concat(zeros);
}

const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
console.log(result);

// [false, 1, 0, 1, 2, 0, 1, 3, 'a'];

// F = (el) => el === 0
// Arreglo que retorna el filter = [0]
// F(0) == F(false) = false === 0 ? --> NO
// F(1) == F(1) = 1 === 0 ? --> NO
// F(2) == F(0) = 0 === 0 ? --> SI
