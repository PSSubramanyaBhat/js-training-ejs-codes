/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/

"use strict";


function cumulativeSum(x) {
    let res = 0;
    for (let i = 0; i < x.length; i++) {
        res += x[i];
        x[i] = res;
    }
    return x;
}

let t = [1, 2, 3];
console.log(cumulativeSum(t));