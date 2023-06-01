function warnTheSheep(queue) {
  // queue = ["sheep", "sheep", "wolf"] 👨‍🦳
  // ----> "Pls go away and stop eating my sheep"

  // queue = ["sheep", "sheep", "wolf", "sheep", "sheep"] 👨‍🦳
  // ----> "Oi! Sheep number N! You are about to be eaten by a wolf!"

  // identificar la pos lobo
  // las ovejas no estan en peligro si el lobo esta en la primera posicion
  // (Hay que iniciar de derecha a izquierda, porque la primera posicion esta al revez)
  /* condicion: si el lobo esta en la primera posicion? */
  if (queue[queue.length - 1] === 'wolf') {
    // si condicion es verdadera
    return 'Pls go away and stop eating my sheep';
  }

  // identificar la pos lobo
  // indicar cual es la oveja que esta en peligro
  // la oveja que esta en peligro es la que esta delante del lobo
  // queue = ["sheep", "sheep", "wolf", "sheep", "sheep"] 👨‍🦳
  const wolfPosition = queue.indexOf('wolf'); // 2
  const sheepPosition = queue.length - (wolfPosition + 1); // 2 + 1 = queue.length - 3 = 5 - 3 = 2
  return (
    'Oi! Sheep number ' +
    sheepPosition +
    '! You are about to be eaten by a wolf!'
  );
  // "Oi! Sheep number 3! You are about to be eaten by a wolf!"
  // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
}
