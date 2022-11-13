function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
    console.log(result);
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
