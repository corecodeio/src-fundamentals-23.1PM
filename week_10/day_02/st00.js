const users = [
  { name: 'lorem', lastName: 'ipsum' },
  { name: 'William', lastName: 'Maldonado' },
  { name: 'Miguel', lastName: 'Tellez' },
];

// const usersResult = [
//   { name: 'lorem', lastName: 'ipsum', id: 0 },
//   { name: 'William', lastName: 'Maldonado', id: 1 },
//   { name: 'Miguel', lastName: 'Tellez', id: 2 },
// ];

const userResult = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  userResult.push({
    id: i,
    name: user.name,
    lastName: user.lastName,
  });
}

console.log(userResult);
console.log(users);

// ------------------------------------------------------------------

const userResult2 = users.map((user, i) => {
  return {
    id: i,
    name: user.name,
    lastName: user.lastName,
  };
});

console.log(userResult2);
