function fubbonaci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fubbonaci(3));
console.log(fubbonaci(7));
console.log(fubbonaci(11));
