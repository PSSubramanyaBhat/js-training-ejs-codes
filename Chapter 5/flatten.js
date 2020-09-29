"use strict";

let arr = [[1, 2], [3], [4, 5, 6]];


function flatten (acc, current) {
    return acc.concat(current);
}

console.log(arr.reduce(flatten));

/*
//Better approach
let array = [[1, 2, 3], [4, 5], [6]];
console.log(arr.reduce((acc, cur) => acc.concat(cur)));
*/

