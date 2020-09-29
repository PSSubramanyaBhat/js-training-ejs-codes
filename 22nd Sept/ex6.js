/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */

"use strict";

function checkAnagramStrings(str1, str2) {
    // document.writeln("PROGRAM 3....\n");
    let numbers1 = str1;
    let numbers2 = str2;

    let arr1 = numbers1.split("");
    let arr2 = numbers2.split("");

    let flag = 0;

    if (numbers1.length === numbers2.length) {
        for (let i = 0; i < numbers1.length; i++) {
            if (arr2.includes(arr1[i])) {
                let loc1 = arr1.indexOf(arr1[i]);
                let loc2 = arr2.indexOf(arr1[i]);

                delete arr1[loc1];
                delete arr2[loc2];

            }
            else {
                flag = 1;
            }
        }

        if (flag === 0) {
            console.log("The given 2 strings are Anagrams!");
        }
        else {
            console.log("The given 2 strings are NOT Anagrams!");
        }
    }
    else {
        console.log("The given 2 strings are NOT Anagrams!");
    }

}

let s1 = "LISTEN";
let s2 = "SILENT";
checkAnagramStrings(s1, s2);