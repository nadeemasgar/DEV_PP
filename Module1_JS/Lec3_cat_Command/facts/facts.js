let fs = require("fs");
let content = process.argv.slice(2);

//console.log(content);

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

let f1kData = fs.readFileSync("./xyz.txt");

f1kData = f1kData + "";

data = f1kData.split("\r\n");
console.log(data);

let removeSpaces = [];

let emptyPushed = false;

  