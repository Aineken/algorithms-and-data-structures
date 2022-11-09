function primeNumber(numb) {
  if (numb < 2) return false;

  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) return false;
  }
  return true;
}

console.log(primeNumber(1));
console.log(primeNumber(4));
console.log(primeNumber(5));
console.log(primeNumber(11));
