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

function countChars(s, label) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === label) {
            count += 1;
        }
    }
    return count;
}

console.log(countChars('BBBBBS', 'B'));
console.log(countChars('kakkerlak', 'k'));