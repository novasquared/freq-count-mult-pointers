# freq-count-mult-pointers
Frequency Counter and Multiple Pointers Practice Problems

NOTE:  See tests for examples of expected results.

canConstructWord

Accepts two strings: a word and some letters. 
Returns true if the word can be built with the letters that you are given. 
Otherwise, it returns false.

Assume that there are only lowercase letters and no space or special characters 
in both the word and the letters.

Time Complexity: O(m + n) (if m is the length of word and n is the length of letters)


averagePair

Takes a sorted array of integers and a target average.
Returns true if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Time Complexity: O(n)


twoArrayObject

Accepts two arrays of varying lengths.The first array contains keys and the second one contains values. 
Returns an object created from the keys and values. 
If there are not enough values, the rest of keys are assigned a value of null. 
If there are not enough keys, the rest of the values are ignored.


sameFrequency»

Accepts two positive integers.
Returns true if the two integers contain the same set of digits with the same frequency.
Returns false otherwise.

Time Complexity: O(n + m)


separatePositive

Accepts an array of non-zero integers.
Returns the same array with the positive numbers on the left and negatives on the right, unsorted.

Time Complexity: O(n)

is-subsequence

Accepts two strings.
Returns true if the letters in str1 are contained in str2 in the same order as str1.
Otherwise returns false.

Time Complexity: O(n + m)


countPairs

Accepts an array of numbers and a target number.
Returns the number of pairs that add up to the target number and stores the 
pairs in a variable called sumPairs

Time Complexity: 
  First version: O(n)
  Second version: O(n*log n)
  
 
longestFall

Accepts an array of integers.
Returns the length of the longest consecutive run of decreasing integers:


pivotIndex

Accepts an array of integers.
Returns the pivot index.  This is the index of the number where the some of integers to the left 
equals the sum of the integers to the right.
If there is more than one valid pivot index, the smallest index is returned.
If there is no valid pivot index, -1 is returned.
