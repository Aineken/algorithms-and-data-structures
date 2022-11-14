function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const newArray = [
  3, 44, 62, 46, 546, 354, 734, -534, -634, 6, -534, 534, -653, -476,
  -3567657465, 745, -456,
];
quickSort(newArray);
console.log(newArray);
