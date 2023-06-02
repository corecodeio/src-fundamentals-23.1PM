const str = 'yosef';
const arr = ['A', 45, true, [1, 2, 3]];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.clear();

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // str[i]
}

console.clear();

//for(/* identificador */ of /* source = [] | '' */) {
// body
//}

for (const val of arr) {
  console.log(val);
}

console.clear();

for (const char of str) {
  console.log(char);
}
