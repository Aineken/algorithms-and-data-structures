function recurtionBinarySearch(arr, find) {
  return search(arr, find, 0, arr.length - 1);
}

function search(arr, find, min, max) {
  let middle = Math.floor((min + max) / 2);

  if (min > max) {
    return -1;
  }

  if (arr[middle] === find) {
    return middle;
  }

  if (arr[middle] > find) {
    return search(arr, find, min, middle - 1);
  } else {
    return search(arr, find, middle + 1, max);
  }
}

const newArray = [4, 5, 7, 8, 9, 41, 43, 534, 539];
console.log(recurtionBinarySearch(newArray, 539));
console.log(recurtionBinarySearch(newArray, 41));
console.log(recurtionBinarySearch(newArray, 54));
console.log(recurtionBinarySearch(newArray, 4));
console.log(recurtionBinarySearch(newArray, 43));
console.log(recurtionBinarySearch(newArray, 540));
