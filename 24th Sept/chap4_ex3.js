"use strict";

function arrayToList (arr) {
    let list = null;
    for(let i = arr.length; i >0; i--) {
        let x = arr[i-1];
        list ={val:x, rest: list};
    }
    
    return list;
    
}

function listToArray (ar) {
    let ans = [];
    while (ar.rest !== null) {
        ans.push(ar.val);
        ar = ar.rest;
    }
    if (ar.rest === null) {
        ans.push(ar.val);
    }
    return ans;
}

function prepend(x, y = null) {
    return {
        val: x,
        rest: y
    };
}
function nth(arrayValues, position) {
    let result = listToArray(arrayValues);
    return result[position];
}

console.log(arrayToList([10,20,30,40]));
console.log(listToArray(arrayToList([10,20,30,40,50])));
console.log(prepend(10));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));