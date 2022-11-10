function factorial(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return 1;
  }

  return factorial(n) * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
