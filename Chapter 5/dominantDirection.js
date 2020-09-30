"use strict";

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name); // check here
        // check here
        if (known === -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
  
function dominantDirection(text) {	
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({direction}) => direction !== "none"); // check here
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total === 0) return "No scripts found"; // check here
  
    //return scripts;
    let big = scripts[0].count;
    let dominantDir = scripts[0].name;
    for (let dir of scripts) {
        if (dir.count > big) {
            dominantDir = dir.name;
            big = dir.count;
        }
    }
    return "The dominant direction is: "+dominantDir;
}
  
  
  
//console.log(textScripts('مساء الخيرHellobro wasssup'));
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl