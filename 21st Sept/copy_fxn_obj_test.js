"use strict";
let copy = {
    created: Date.now(),
    author: "Author",
    cells: "Cells",
    metadata: "Metadata"
};

copy.metadata.title = "Copy of " + "2nd Data"; //creates an error saying, Cannot create property 'title' on string 'Metadata'

// copy.metadata["title"] = "Copy of " + "2nd Data";

// copy.title = "Copy of " + "2nd Data";

// copy.metadata = "Copy of " + "2nd Data";


/* copy.metadata = {
     title: "Yo",
     hi: "Hi"
};*/

// copy.metadata.title = {
//     title: "Copy of " + "2nd Data"};

console.log(copy);