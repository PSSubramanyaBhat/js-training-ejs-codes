"use strict";

function arrayToList (arr) {
    let list = {};
    for(let i = arr.length; i >0; i--) {
        let x = arr[i-1];
        list ={val:x, rest: list};
    }
	
    return list; // problem is its returning only 3 loop values, doesnt return perfect answer for 4 + len of arr
	
}

console.log(arrayToList([10,20,30]));