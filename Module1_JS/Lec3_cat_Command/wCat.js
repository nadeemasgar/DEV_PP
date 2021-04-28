let fs = require("fs");
let content = process.argv.slice(2);

console.log(content);

let flags = [];
let files = [];

for(let i = 0; i < content.length; i++) {
    if(content[i].startsWith('-') ) {
        flags.push(content[i]);
    }
    else {
        files.push(content[i]);
    }
}

// console.log(flags);
// console.log(files);

let fileKdata = "";

for(let i = 0; i < files.length; i++) {
    fileKdata += fs.readFileSync( files[i] );
    fileKdata += " ";
}

console.log(fileKdata);