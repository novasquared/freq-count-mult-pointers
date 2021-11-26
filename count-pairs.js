"use strict";
/**
 * This function counts the number of pairs in an array that add up to a target
 * number.
 * Takes an array of numbers and a target number
 * Returns the number of pairs and stores the pairs in a variable called 
 * sumPairs.
 * Time Complexity O(n)
 */
let sumPairs = [];

function countPairs(nums, target) {
  let numIndexes = new Map();
  let pairCount = 0;
  
  for (let i=0; i<nums.length; i++) {  // O(n)
    let diff = target - nums[i];       // O(1)
    if (numIndexes.has(diff)) {        // O(1)
      sumPairs.push([nums[i], diff])   // O(1)
      pairCount++;                     // O(1)
    } else numIndexes.set(nums[i], i)  // O(1)
  }
  return pairCount;
}

// Time Complexity O(n*log n)
// function countPairs(nums, target) {
//   let i = 0;
//   let j = nums.length - 1;
//   let pairsCount = 0;

//   nums.sort(function(a,b){return a-b});    // O(n*log n)
//   while (i < j) {
//     let sum = nums[i] + nums[j];           // O(1)
//     if (sum < target) {
//       i++;                                 // O(1)
//     } else if (sum > target) {
//       j--;                                 // O(1)
//     } else if (sum === target) {           // O(1)
//       sumPairs.push([nums[i], nums[j]]);   // O(1)
//       pairsCount++;                        // O(1)
//       i++;                                 // O(1)
//       j--;                                 // O(1)
//     }
//   }
//   return pairsCount;
// }


console.log(countPairs([3, 1, 5, 4, 2], 6));
console.log(sumPairs);
sumPairs = [];
// 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10));
console.log(sumPairs);
sumPairs = [];
// 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10));
console.log(sumPairs);
sumPairs = [];
// 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10));
console.log(sumPairs);
sumPairs = [];
// 0
console.log(countPairs([1, 2, 3, 4, 5], -3));
console.log(sumPairs);
sumPairs = [];
// 0
console.log(countPairs([0,-4],-4));
console.log(sumPairs);
sumPairs = [];
// 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0));
console.log(sumPairs);
sumPairs = [];
// 2