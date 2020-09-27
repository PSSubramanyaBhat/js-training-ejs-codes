"use strict";

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else if (obj1 === null || obj2 === null || typeof (obj1) !== "object" || typeof (obj2) !== "object") {
        return false;
    } else if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    } else {
        for (let keyValue of Object.keys(obj1)) {
            if (!deepEqual(obj1[keyValue], obj2[keyValue])) {
                return false;
            }
        }
    }
    return true;
}

let obj = { here: { is: "an" }, object: 2 };

let a = null;

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(a, obj));
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true