/*111111111111111
// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
// 	  if (test(element)) {
//             passed.push(element);
// 	  }
//     }
//     return passed;
// }
  
// console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
*/

/*222222222222222222222
// function dominantDirection (text) {
    
// }

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
*/


/*   333333333333333
"use strict";

//function filter(array, test) {
//    let passed = [];
//    for (let element of array) {
//	  if (test(element)) {
//            passed.push(element);
//	  }
//    }
//    return passed;
//}

function abc(text) {
  let d = [];
  let conc = [];
  let a = [];
  for (let i = 0; i< text.length; i++) {
    // console.log(text.codePointAt(i));
    // console.log(text.charCodeAt(i));
    //d.push(text.charCodeAt(i));
    d.push(text.codePointAt(i));
  }
  document.writeln(d);
  console.log(d);

  for (let j of SCRIPTS) {
    a = j.ranges;
    let res = [];
    let scriptname = [];
    let dir = [];
    for (let z of a) {
        res = res.concat(z);
    }
    //console.log(res);
    //console.log(res.length);
    //console.log(d);
    console.log(j);
    for (let c of d) {
        if(res.includes(c)) {
            scriptname.push(j.name);
            dir.push(j.direction);
        }
        //console.log(c);
    }
    console.log(scriptname);
    console.log(dir);
  }
}

abc("مساء الخير");
//console.log(filter(SCRIPTS, script => script.living));
//console.log(horseShoe.codePointAt(0));
// → [{name: "Adlam", …}, …]
*/

