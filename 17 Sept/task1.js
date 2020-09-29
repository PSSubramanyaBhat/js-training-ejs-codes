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

//method 1
function checkAge(age) {
    age > 18 
        ? console.log("You are "+age+" and can enter")
        : console.log("You are below 18 and cannot enter");
}


checkAge(16);
checkAge(19);