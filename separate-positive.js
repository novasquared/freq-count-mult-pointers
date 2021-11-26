"use strict";
/**
 * Input array is a list of positive and/or negative integers.
 * Returns the same array with the positive numbers on the left and 
 * negatives on the right unsorted
*/
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // console.log(`left=${left} right=${right}`);
    if (nums[left] < 0 && nums[right] >= 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    } else if (nums[left] >= 0) left++;
      else right--;

      // console.log(nums);
    }
    return nums
  }
  

console.log(separatePositive([2, -1, -3, 6, -8, 10]));
// [2, 10, 6, -3, -1, -8]
console.log(separatePositive([5, 10, -15, 20, 25]));
// [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5]));
// [5, -5]
console.log(separatePositive([1, 2, 3]));
// [1, 2, 3]