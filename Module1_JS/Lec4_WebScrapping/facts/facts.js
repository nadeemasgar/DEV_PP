const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html");

// htmlkadata == html trat to

let ch = cheerio.load(htmlKaData);

let pKaData = ch(".main").text();

console.log(pKaData);  // p tag mila hai.. but object ke form me mila hai

