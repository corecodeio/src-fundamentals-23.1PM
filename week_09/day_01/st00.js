const obj = {
  // object description
  // llave = identificador || 'string'
  // valor = string || number || boolean || function || obj || array || null || undefined
  // llave: valor,
  // llave: valor,
  // llave: valor,
  // llave: valor,
  fullName: 'Yosef',
  'age': 27,
  outfit: {
    shirt: 'green shirt',
    pants: 'black pants',
  },
};

var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
    },
  },
};


function warnTheSheep(queue) {
  // queue = ["sheep", "sheep", "sheep", "wolf", "sheep"] 🕴️
  // queue = ["sheep", "sheep", "wolf"] 🕴️
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }
  // your code...
  // queue = ["sheep", "sheep", "sheep", "wolf", "sheep"] => 1
  // queue = ["sheep", "wolf", "sheep", "sheep", "sheep"] ==> 3
  // queue = ["wolf", "sheep", "sheep", "sheep", "sheep"] ==> 4
}