function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

// function insertionSort(arr) {
//   for (let i = arr.length - 1; i > -1; i--) {
//     let numberToInsert = arr[i];
//     let j = i + 1;
//     while (j <= arr.length && arr[j] < numberToInsert) {
//       arr[j - 1] = arr[j];
//       j = j + 1;
//     }
//     arr[j - 1] = numberToInsert;
//   }
// }

const newArray = [-6, 20, 8, -2, 4];
insertionSort(newArray);
console.log(newArray);
