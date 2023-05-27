// if
// if else
// && (AND)
// || (OR)
// ! (NOT)

const age = 10;
if (age >= 18) {
  console.log('is legal');
} else {
  console.log('is not legal');
}

if (age === 5) {
  console.log('the age is 5');
}

const isUser = false;
const isAdmin = true;

if (isUser && isAdmin) {
  console.log('is super user');
} else if (isUser) {
  console.log('is a nomarl user');
} else {
  console.log('not a user');
}
