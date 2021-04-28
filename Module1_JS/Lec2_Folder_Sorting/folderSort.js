let fs = require("fs");
const path = require("path");
let extensions = require("./util");
let folderPath = "./Downloads";
let extFolderPath;

function checkFolder(extension) {
    // check if extension is matching with any folder
    for(let key in extensions) {
        // "Images" "Audio"  
        if(extensions[key].includes(extension)) {
            // sting manipulation
            extFolderPath = `${folderPath}/${key}`;
            break;
        }
    }
    // folderName = "Images"
    return fs.existsSync(extFolderPath);
}

function moveFile(fileName) {
    // copy file
    let sourceFilePath = `${folderPath}/${fileName}`;
    let destinationFilePath = `${extFolderPath}/${fileName}`;
    fs.copyFileSync(sourceFilePath , destinationFilePath);

    console.log(sourceFilePath);
    console.log(destinationFilePath);

    // delete file
    fs.unlinkSync(sourceFilePath);

}

function createFolder() {
    fs.mkdirSync(extFolderPath);
}

function sortFolder(folderPath) {
    let content = fs.readdirSync(folderPath);
    for(let i = 0; i < content.length; i++) {
        //get extension of each file 
        let extensionName = path.extname(content[i]);
        console.log(extensionName);
        let extensionFolderExist = checkFolder(extensionName);
        if(extensionFolderExist) {
            // move files
             
            moveFile(content[i]);
        }
        else {
            //  createFile()
            createFolder();

            //moveFile()
            moveFile(content[i]);
 
        }
    }
}

sortFolder(folderPath);