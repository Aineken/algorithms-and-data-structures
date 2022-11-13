function binarySearch(arr, find) {
  let low = 0;
  let max = arr.length - 1;

  while (low <= max) {
    let middle = Math.floor((low + max) / 2);
    if (arr[middle] === find) {
      return middle;
    }
    if (arr[middle] > find) {
      max = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

const newArray = [4, 5, 7, 8, 9, 41, 43, 534, 539];
console.log(binarySearch(newArray, 539));
console.log(binarySearch(newArray, 41));
console.log(binarySearch(newArray, 54));
console.log(binarySearch(newArray, 4));
console.log(binarySearch(newArray, 5));
