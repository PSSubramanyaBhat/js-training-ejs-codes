"use strict";
function isEven(x) {
    if (x > 0 && x % 2 === 0) {
        return true;
    } else if (x > 0 && x % 2 !== 0) {
        return false;
    } else {
        // return isEven(x-2);
        /*This method causes stack to overflow by returning more negative numbers */
        // return isEven(-(x-2));
        /* Method 1: eg. -1 % 2 gives answer as -1, 
		 So if we could return negative of the remainder, we can bring it to the 1st 2 conditions */
        return isEven(x + 2); 
        /*This method recurssively adds 2 to the remainder and brings it to the 1st 2 conditions */
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));