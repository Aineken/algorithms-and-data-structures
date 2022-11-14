function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

const newArray = [
  3, 44, 62, 46, 546, 354, 734, -534, -634, 6, -534, 534, -653, -476,
  -3567657465, 745, -456,
];

console.log(mergeSort(newArray));
