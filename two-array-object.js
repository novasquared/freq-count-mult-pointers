"use strict";
/* 
twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
  // {'a': 1, 'b': 2, 'c': 3, 'd': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])
  // {'a': 1, 'b': 2, 'c': 3}

twoArrayObject(['x', 'y', 'z'], [1, 2])
  // {'x': 1, 'y': 2, 'z': null}

Accepts two arrays and returns an object with keys from the first array and values from the second array. 
If there are not enough values, the rest of keys should have a value of null. 


- create an empty object 
- loop through the first array pushing i from it and the second array as a key value pair
- if there's no index in the second array, push null
- return the object

*/

/** 
 * Accepts two arrays and returns an object with keys from the first array and 
 * values from the second array.  If there are not enough values, the rest of 
 * the keys should have a value of null.  If there are not enough keys, 
 * the rest of the values should be ignored.
 */
function twoArrayObject(keys, values) {
  let object = {};

  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i] || null;
  }
  return object;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]));
  // {'a': 1, 'b': 2, 'c': 3, 'd': null}

console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]));
  // {'a': 1, 'b': 2, 'c': 3}

console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]));
  // {'x': 1, 'y': 2, 'z': null}