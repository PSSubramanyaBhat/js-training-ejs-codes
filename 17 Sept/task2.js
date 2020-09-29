"use strict";

//QUESTION: Function for min of two numbers

function minNum(a, b) {
    a > b
        ? console.log("Mininum number is "+b)
        : console.log("Mininum number is "+a);
}

minNum(2, 5);
minNum(3, -1);
minNum(1, 1);