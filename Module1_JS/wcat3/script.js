#!/usr/bin/env node

let cmds = process.argv.slice(2);
const fs = require("fs");

// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);
// console.log(fs.existsSync("abc.txt"));

// function wcat(cmds) {
//     let options = cmds.filter(function(data, index) {
//         return data.startsWith("-");
//     });

//     let files = cmds.filter(function(data, index) {
//         return !data.startsWith("-");
//     });

//     if(files.length == 0) {
//         console.log("Please specify a filename");
//         return;
//     };

//     for(i in files) {
//         if(!fs.existsSync(files[i])) {
//             console.log(files[i] + " does not exists");
//             return;
//         }
//     }

//     let count = 1; 
//    for(i in files) {
//        let data = fs.readFileSync(files[i], "utf-8");
//        var x = options.includes("-s");  // space
//        var y = options.includes("-n");  // numbering
       
//        if(x == true && y == true){
//             let lines = data.split("\r\n");
//                 let allText = "";
//                 // console.log(lines);  
//                 for(j in lines) {
//                     // allText = "";
//                     if(lines[j] != "") {
//                         allText += count + ". " + lines[j] + "\n";
//                         count++;
//                         // console.log(count + ". " + lines[j]);
//                         // count++;
                        
//                     }
//                 }
//                 console.log(allText);
//        } 
//        else if(x == true) {
//             let lines = data.split("\r\n");
//             let allText = "";

//             for(j in lines) {
//                 allText = "";
//                 if(lines[j] != "") {
//                     allText = lines[j];
//                     console.log(allText);
//                 }
//             }
//        }
//        else if(y == true) {
//             let lines = data.split("\r\n");
//             for(j in lines) {
//                 allText = "";
//                 allText = count + ". " + lines[j];
//                 count++;
//                 console.log(allText);
//             }
//         }
//         else {
//             console.log(data);
//         }
//    }

// }

// wcat(cmds);

function wcat(cmds) {
    let options = cmds.filter(function(data, index) {
        return data.startsWith("-");
    });

    let files = cmds.filter(function(data, index) {
        return !data.startsWith("-");
    });

    if(files.length == 0) {
        console.log("Please specify a filename");
        return;
    };

    for(i in files) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exists");
            return;
        }
    }

    // Writing Commands

    if(options.includes("-w")) {
        if(options.length != 1 || files.length != 2 || cmds.indexOf("-w") != 1) {
            console.log("Command not found");
            return;
        }

        let data = fs.readFileSync(files[0], "utf-8");
        fs.writeFileSync(files[1], data);
        return;
    }
    else if(options.includes("-a")) {
        if(options.length != 1 || files.length != 2 || cmds.indexOf("-a") != 1) {
            console.log("Command not found");
            return;
        } 

        let data = fs.readFileSync(files[0], "utf-8");
        let data1 = fs.readFileSync(files[1], "utf-8");
    
        fs.writeFileSync(files[1], data1 +"\r\n"+ data);
    } 
    else if(options.includes("-ws")) {
        if(options.length != 1 || files.length != 2 || cmds.indexOf("-ws") != 1) {
            console.log("Command not found");
            return;
        } 

        let data = fs.readFileSync(files[0], "utf-8");

        let lines = data.split("\r\n");
        let data1 = fs.readFileSync(files[1], "utf-8");
        
        let allText = "";
        for(j in lines) {
            if(lines[j] != "") {
                allText += lines[j] + "\n";
            }
        }
        fs.writeFileSync(files[1], data1 +"\r\n"+ allText);
    }

}

wcat(cmds);
