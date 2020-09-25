"use strict";


// console.log(Object.keys(obj).sort());

function deepEqual(obj1, obj2) {
    /*let a = [];
    a.push(obj1);
    a.push(obj2);
	
    if (JSON.stringify(a[0]) === JSON.stringify(a[1])) {
    	return true;
    } else {
    	return false;
    }*/
	
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    } else {
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true