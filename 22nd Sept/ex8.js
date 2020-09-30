/* 8
A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice. 
Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco, 
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa, 
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon. 
To ignore case, invoke the toLowerCase method before checking.
*/

"use strict";

/*function doubloon (x) {
    x = x.toLowerCase();
    let x2 = x.split("");
    let arrLen = x2.length;
    let y = "";
    let pos = 0;
    if (arrLen % 2 === 0) {
        for (let i =0; i < parseInt(arrLen/2); i++) {
            y = x2[0];
            pos = x2.indexOf(y);
            x2.splice(pos,1);
            if (x2.includes(y)) {
                pos = x2.indexOf(y);
                x2.splice(pos,1);
            }
        }
        if (x2.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    else {
        return false;
    }
}*/

function doubloon (x) {
    x = x.toLowerCase();
    let x2 = x.split("");
    let arrLen = x2.length;
    x2.sort();
    let y = "";
    let z = "";
    let pos = 0;
    if (arrLen % 2 === 0) {
        for (let i =0; i < parseInt(arrLen/2); i++) {
            y = x2[0];
            pos = x2.indexOf(y);
            if (x2[0] === x2[1]) {
                z = x2.splice(pos,2);
            }
            if( JSON.stringify(z) === JSON.stringify(x2.slice(0,2))) {
                return false; //since 1 letter occurs more than 2 times
            }
        }
        if (x2.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    else {
        return false;
    }
}
// let t = "intesetins";
// let t = "inteseeetins";
let t = "Emmett";
console.log(doubloon(t));