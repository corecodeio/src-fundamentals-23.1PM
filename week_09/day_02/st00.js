function warnTheSheep(queue) {
  // queue = [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] 🕴️
  // queue = ["sheep", "sheep", "sheep", "wolf", "sheep"]🕴️
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }
  const indexOfWolf = queue.indexOf('wolf') + 1;
  const indexOfSheep = queue.length - indexOfWolf;
  return (
    'Oi! Sheep number ' +
    indexOfSheep +
    '! You are about to be eaten by a wolf!'
  );
}
