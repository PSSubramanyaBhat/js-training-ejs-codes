"use strict";
// function countBs(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'B') {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countBs('BBBBBS'));

function countB(s) {
    return function countChar(char) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === char) {
                count += 1;
            }
        }
        return count;
    };
}

// console.log(countChars('BBBBBS', 'B'));
// console.log(countChars('kakkerlak', 'k'));
let countChar = countB("kakkerlak");
console.log(countChar("k"));