function climbing(n) {
  const clim = [1, 2];

  for (let i = 2; i <= n; i++) {
    clim[i] = clim[i - 1] + clim[i - 2];
  }
  return clim[n - 1];
}
console.log(climbing(2));
console.log(climbing(3));
console.log(climbing(4));
