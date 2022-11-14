function buubleSort(arr) {
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const newArray = [
  3, 44, 62, 46, 546, 354, 734, -534, -634, 6, -534, 534, -653, -476,
  -3567657465, 745, -456,
];
buubleSort(newArray);
console.log(newArray);
