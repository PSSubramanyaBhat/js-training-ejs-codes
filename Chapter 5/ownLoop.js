"use strict";

function ownLoop(num, testf, updatef, body) {
    if(testf(num)) {
        body(num);
    }
    else {
        console.log("Not possible");
        return false;
    }
    num = updatef(num);
    ownLoop(num, testf, updatef, body);
}

ownLoop(6, n => n > 0, n => n - 1, console.log);