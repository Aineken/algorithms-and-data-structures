/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  for (let v = 0; v < nums.length; v++) {
    result[v] = nums.slice(0, v);
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4, 5, 6, 7]));
