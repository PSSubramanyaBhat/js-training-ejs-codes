/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/

"use strict";

function middle(x) {
    let res = x.splice(1, x.length - 2);
    return res;
}

let t = [1, 2, 3, 4];
console.log(middle(t));

