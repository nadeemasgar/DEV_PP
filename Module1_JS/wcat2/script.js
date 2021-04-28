#!/usr/bin/env node

// const fs = require('fs');
// let data = fs.readFileSync("abc.txt", "utf-8");
// fs.writeFileSync("abc.txt", data + "Hello, this is pepcoding");
// console.log(data);

// console.log(process.argv);

// *******************************************************************************************
// Method to remove line break from file

// let cmds = process.argv.slice(2);
// const fs = require("fs");

// function wcat(cmds) {
    
//     let options = cmds.filter(function(data, index) {
//         return data.startsWith("-");
//     });

//     let files = cmds.filter(function(data, index) {
//         return !data.startsWith("-");
//     });

//     if(files.length == 0) {
//         console.log("Please specify a file name to read");
//         return;
//     }

//     for(i in files) {
//         if(!fs.existsSync(files[i])) {
//             console.log(files[i] + " does not exists");
//             return;
//         }
//     }

//     for(i in files) {
//         let data = fs.readFileSync(files[i], "utf-8");

//         if(options.includes("-s")) {
//             let lines = data.split("\r\n");
//             let allText = "";
//             for(j in lines) {
//                 if(lines[j] != "") {
//                     allText += lines[j] + "\n";
//                 }
//             }
//             console.log(allText);
//         }
//         else{
//             console.log(data);
//         }
        
//     }
    
// }

// wcat(cmds);

// const fs = require('fs');



// let data = fs.readFileSync("abc.txt", "utf-8");
// fs.writeFileSync("abc.txt", data + " Hello.. this is pepcoding");
// data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);
// console.log(fs.existsSync("abc.txt"));

let cmds = process.argv.slice(2);
const fs = require("fs");

function wcat(cmds) {
    
    let options = cmds.filter(function(data, index) {
        return data.startsWith("-");
    });
    
    let files =  cmds.filter(function(data, index) {
        return !data.startsWith("-");
    });

    if(files.length == 0) {
        console.log("Please specify a filename");
        return;
    }

    for(i in files) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exits");
            return;
        }
    }

    for(i in files) {
        let data = fs.readFileSync(files[i], "utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            let allText = "";
            // console.log(lines);
            for(j in lines) {
                
                if(lines[j] != "") {
                    console.log(lines[j]);
                    //allText += lines[j] + "\n";
                }
            }
            // console.log(allText);
            // return;
        }
        else{
            console.log(data);
        }
        
        // console.log(data);
    }
}
wcat(cmds);