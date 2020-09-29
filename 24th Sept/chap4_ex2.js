"use strict";

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < parseInt(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
        // i++;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 2, 3, 4, 5]));

console.log(reverseArrayInPlace(["A", "B", "C","D", "E"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));