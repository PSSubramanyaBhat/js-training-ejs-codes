"use strict";

function range(start, end, step = 1) {
    let a = [];
    if (parseInt(start) > parseInt(end)) {
        for (let i = start; i >= end; i-=step) {
            a.push(i);
        }
    } else {
        for (let i = start; i <= end; i+=step) {
            a.push(i);
        }
    }
    return a;
}

function sum(arr) {
    let res = 0;
    for (let j of arr) {
        res += j;
    }
    return res;
}

console.log(range(3, -10, 2));
console.log(sum(range(3, -10, 2)));