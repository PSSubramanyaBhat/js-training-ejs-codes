"use strict";
/*
QUESTION:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

let ask = (question, yes, no) => {
    if (question) yes(); /*couldnt use any sort of prompt so kept the if condition as question itself.*/
    else no();
};

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);