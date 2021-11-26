"use strict";
/**
 * Accepts an array of integers.
 * Returns the length of the longest consecutive run of decreasing integers.
 */
function longestFall(nums) {
  if (nums.length <= 1) return nums.length;

  let fallLength = 1;
  let greatestFall = 0;

  for (let i=0; i<nums.length; i++) {
    if (nums[i] > nums[i+1]) fallLength++;
    else {
      if (greatestFall < fallLength) greatestFall = fallLength;
      fallLength = 1;
    }
  }
  if (greatestFall < fallLength) greatestFall = fallLength;
  return greatestFall;
}

console.log(longestFall([5, 3, 1, 3, 0]));
  // 3, 5-3-1 is the longest consecutive sequence of decreasing integers

console.log(longestFall([2, 2, 1]));
  // 2, 2-1 is the longest consecutive sequence of decreasing integers

console.log(longestFall([2, 2, 2]));
  // 1, 2 is the longest consecutive sequence of decreasing integers

console.log(longestFall([5, 4, 4, 4, 3, 2]));
  // 3, 4-3-2 is the longest

console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]));
  // 5, 9-8-7-6-5 is the longest

console.log(longestFall([]));
  // 0