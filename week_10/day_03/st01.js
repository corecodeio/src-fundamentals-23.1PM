function validParentheses(parens) {
  // your code here ..
  while (parens.includes('()')) {
    parens = parens.replace('()', '');
  }
  return parens.length == 0;
}

console.log(validParentheses('()')); //  =>  true
console.log(validParentheses(')(()))')); //   =>  false
console.log(validParentheses('(')); // =>  false
console.log(validParentheses('(())((()())())')); //  =>  true
console.log(validParentheses(')(')); //  =>  false

// '(())((()())())'

// '()((()())())'

// '((()())())'

// '((())())'

// '(()())'

// '(())'

// '()'

// ''
