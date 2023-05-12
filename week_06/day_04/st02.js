function inception(n) {
  if (n === 0) {
    return 0;
  }
  return n + inception(n - 1);
}

console.log(inception(4));
