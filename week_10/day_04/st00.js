// encryptThis = funcion
// recibe un parametro = text (string)
// develve el resultado de
// text.split.map.replace.replace.join (string)
const encryptThis = (text) =>
  text
    .split(' ')
    .map((word) =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(' ');

// Hola Yosef ---> [Hola, Yosef]
// [Hola, Yosef] --> F --> [X, Y]
// X = F(Hola)
// Y = F(Yosef)
// /EXPRESION REGULAR/

// Hola
// (^\w) --> H (1)
// (\w) --> o (2)
// (\w*) --> l (3)
// (\w$) --> a (4)

// `$1$4$3$2`

// Yosef
// (^\w) --> Y (1)
// (\w) --> o (2)
// (\w*) --> se (3)
// (\w$) --> f (4)

// `$1$4$3$2`

// Halo
// [72alo]

// Yfseo
// [72alo, 89fseo]

// 72alo 89fseo

const result = encryptThis('Hola Yosef');
console.log(result);
