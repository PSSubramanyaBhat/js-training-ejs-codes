/* 4
Write a function called chop that takes an array , modifies it by removing the first and last elements, 
and returns undefined. 

For example:
>>>let t = [1, 2, 3, 4]
>>> chop(t)
>>> t
[2, 3]
*/

"use strict";

function chop(x) {
    x.pop();
    x.shift();
}

let t = [1, 2, 3, 4];
console.log(chop(t));
console.log(t);