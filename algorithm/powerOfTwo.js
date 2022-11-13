function powerOfTwoumber(nums) {
  //   if (nums < 0) {
  //     return false;
  //   } else if (nums === 1 || nums === 2) {
  //     return true;
  //   }
  //   while (nums >= 0) {
  //     if (nums % 2 !== 0) {
  //       return false;
  //     }
  //     nums = nums/2;
  //     return true;
  //   }
  //   return nums & (nums - 1 === 0);
  return (Math.log(nums) / Math.log(2)) % 1 === 0;
}

console.log(powerOfTwoumber(1));
console.log(powerOfTwoumber(2));
console.log(powerOfTwoumber(4));
console.log(powerOfTwoumber(8));
console.log(powerOfTwoumber(16));
console.log(powerOfTwoumber(32));
console.log(powerOfTwoumber(64));
console.log(powerOfTwoumber(128));
console.log(powerOfTwoumber(129));

// Big O notation = O(log(nums));
// Big O notation = O(1);
