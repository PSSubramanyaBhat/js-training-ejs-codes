/* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
 */

"use strict";

// function hasDuplicates(x) {
//     let dup = "";
//     let res = [];
//     let alen = x.length;
//     for (let i = 0; i < alen; i++) {
//         dup = x.shift();
//         if (x.includes(dup) && !res.includes(dup)) {
//             res.push(dup);
//         }
//     }
//     return res;
// }


function hasDuplicates(x) {
    let dup = "";
    let alen = x.length;
    for (let i = 0; i < alen; i++) {
        dup = x.shift();
        if (x.includes(dup)) {
            x.unshift(dup);
            return true;
        } else {
            return false;
        }
    }
}


// let t = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 56, 6, 6, 7, 8, 8];
let t = [1, 2, 3, 4];
console.log(hasDuplicates(t));