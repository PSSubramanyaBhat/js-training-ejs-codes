/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/

"use strict";

function isSorted(x) {
    for (let i = 0; i <= x.length; i++) {
        if (x[i] > x[i + 1]) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 2]));
//true
console.log(isSorted(["b", "a"]));
//false