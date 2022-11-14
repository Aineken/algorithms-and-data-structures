function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let pr = i - 1;
    while (pr >= 0 && arr[pr] < numberToInsert) {
      arr[pr + 1] = arr[pr];
      pr = pr - 1;
    }
    arr[pr + 1] = numberToInsert;
  }
}

// function insertionSort(arr) {
//   for (let i = arr.length - 1; i > -1; i--) {
//     let numberToInsert = arr[i];
//     let j = i + 1;
//     while (j <= arr.length && arr[j] > numberToInsert) {
//       arr[j - 1] = arr[j];
//       j = j + 1;
//     }
//     arr[j - 1] = numberToInsert;
//   }
// }

const newArray = [
  -6, 20, 8, -2, 45, 45, 345, 34, 65, 7635, 846, 7865, 3735, 46234, 56, 427,
  648, 4567, 34567, 356, 7365, 74, 56,
];
console.log(newArray);
insertionSort(newArray);
console.log(newArray);
