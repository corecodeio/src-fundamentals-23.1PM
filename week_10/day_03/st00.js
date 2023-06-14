function validParentheses(parens) {
  // 1. Obtener todos los parentesis de esta forma: (
  // 2. Ya que tengo todos los parentesis de esta forma, entonces voy a contar cuantos tengo
  let value0 = parens.split('').filter((x) => x == '(').length;

  // 3. Obtener todos los parentesis de esta forma: )
  // 4. Ya que tengo todos los parentesis de esta forma, entonces voy a contar cuantos tengo
  let value1 = parens.split('').filter((x) => x == ')').length;

  // 5. Si al final de contar, tengo la misma cantidad de "(" que ")"
  // 5.1 si eso se cumple devuelvo verdadero
  // 5.2 sie eso no se cumple devuelvo falso
  return value0 === value1;
}

console.log(validParentheses('()')); //  =>  true
console.log(validParentheses(')(()))')); //   =>  false
console.log(validParentheses('(')); // =>  false
console.log(validParentheses('(())((()())())')); //  =>  true
console.log(validParentheses(')(')); //  =>  false

// W = '()' --> split('') --> ['(', ')'] --> ['('] --> 1
// P = '()' --> split('') --> ['(', ')'] --> [')'] --> 1
// RETURN W === P? --> 1 === 1 ? --> (TRUE)

// 'ABAED' --> split('A') --> ['', 'B', 'ED']
// 'XyYXf' --> split('X') --> ['', 'yY', 'f']
// 'yOSEF' --> split('') --> ['y', 'O', 'S', 'E', 'F']

// [(,(,),),(,(,(,),(,),),(,),)]

// [(,(,(,(,(,(,(] --> 7

// [(,(,),),(,(,(,),(,),),(,),)]

// [,),),),),),),)] --> 7
