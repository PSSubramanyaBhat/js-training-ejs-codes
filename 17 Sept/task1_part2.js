"use strict";

/*
QUESTION: Rewrite the function using '?' or '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

//method 2
function checkAge(age) {
    return age > 18 || false;
}


let res = checkAge(19);
res 
    ? console.log("Enter the movie") 
    : console.log("You cant enter the movie");

