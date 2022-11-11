function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(10));
