"use strict";
/**
 * 
 * Takes two strings as input
 * Returns true if the letters in str1 are contained in str2 in the same 
 * order as str1
 * Otherwise, it returns false
 */
function isSubsequence(str1, str2) {
  if (str2.lenghth < str1.length) return false;

  let i = 0;
  let j = 0;
  
  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {j++;}
    else {
      i++;
      j++;
    }
  }
  if (i === str1.length) return true;
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
// true
console.log(isSubsequence('sing', 'sting'));
// true
console.log(isSubsequence('abc', 'abracadabra'));
// true
console.log(isSubsequence('abc', 'acb'));
// false (order matters)