function cartesianProcust(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let productOne = a[i];
    for (let j = 0; j < b.length; j++) {
      let productOTwo = b[j];
      result.push([productOne, productOTwo]);
    }
  }
  return result;
}

let a = [2, 4, 5];
let b = [3, 32];
console.log(cartesianProcust(a, b));

// Big O = O(a*b)
