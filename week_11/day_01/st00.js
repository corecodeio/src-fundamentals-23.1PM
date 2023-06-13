function processArray(arr, callback) {
  // *map
  // *forEach
  //   const result = [];
  //   for(let i = 0; i < arr.length; i++) {
  //     result.push(callback(arr[i]))
  //   }
  //   return result;
  return arr.map(callback);
}
