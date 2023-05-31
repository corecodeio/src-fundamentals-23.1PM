const object = { a: 1, b: 2, c: 3, d: 5 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for(/* identificador (llave) */ in /* obj */) {
//     // body
// }

for (const key in object) {
  // console.log(key);
  // console.log(object[key]);
  console.log(key + ' ---> ' + object[key]);
}

console.clear();

const request = {
  data: `{"firstName": "Yosef","lastName": "Maldonado","age": 27}`,
};

console.log(request);

function requestHandler(req) {
  const data = JSON.parse(req.data);
  console.log(data);
  let infoOfUser = '';
  for (const info in data) {
    infoOfUser = infoOfUser + ' ' + data[info];
  }
  return infoOfUser;
}

console.log(requestHandler(request));
