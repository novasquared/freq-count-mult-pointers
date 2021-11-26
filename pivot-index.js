"use strict";
/**
 * Accepts an array of integers.
 * Returns the pivot index where the sum of the items to the left equal to 
 * the sum of the items to the right. If there are more than one valid pivot 
 * index, return the smallest value.
 */
function pivotIndex(nums) {
  let rightSum = nums.reduce((previousValue, currentValue) => 
    previousValue + currentValue);
  let leftSum = 0;
  
  for (let i=0; i<nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 2, 1, 6, 3, 1]));
// 3

console.log(pivotIndex([5, 2, 7]));
// -1  no valid pivot index

console.log(pivotIndex([-1, 3, -3, 2]));
  // 1 valid pivot at 2: -1 + 3 = 2
  //   however there is a smaller valid pivot at 1: -1 = -3 + 2