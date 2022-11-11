function linearSearch(arr, find) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
      return i;
    }
  }
  return -1;
}

const newArray = [4, 5, 7, 8, 0, 45, 43, 534, 534];
console.log(linearSearch(newArray, 4));
console.log(linearSearch(newArray, 8));
console.log(linearSearch(newArray, 534));
