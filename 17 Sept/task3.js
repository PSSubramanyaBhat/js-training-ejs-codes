"use strict";
//QUESTION: write a function to get the nth power of a base
function power (base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * power (base, exp-1);
    }
}

console.log(power(3, 2));
console.log(power(3, 3));
console.log(power(1, 100));