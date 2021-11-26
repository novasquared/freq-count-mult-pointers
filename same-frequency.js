"use strict";
/** 
 * a function to create a simple 
 * frequency counter using an object
*/
function createFrequencyCounter(array) {
    let freqs = {};

    for (let val of array) {
        let valCount = freqs[val] || 0;
        freqs[val] = valCount + 1;
    }

    return freqs;
}

/** 
 * Determines whether or not two positive integers contain the same set of 
 * digits with the same frequency
 * Takes two postive integers.
 * Returns true if both contain the same digits with the same frequency.
 * Returns false otherwise.
*/
function sameFrequency(int1, int2) {
    if (int1.toString().length !== int2.toString().length) return false;

    let digits1Freq = createFrequencyCounter(Array.from(String(int1)));
    let digits2Freq = createFrequencyCounter(Array.from(String(int2)));

    for (let key in digits1Freq) {
        if ((key in digits2Freq) && (digits1Freq[key] === digits2Freq[key])) {
            continue;
        }
        else return false;
    }
    return true;
}

console.log(sameFrequency(182, 281));
// true
console.log(sameFrequency(34, 14));
// false
console.log(sameFrequency(3589578, 5879385));
// true
console.log(sameFrequency(22, 222));
// false