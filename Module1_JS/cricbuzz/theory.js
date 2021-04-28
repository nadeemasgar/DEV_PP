require("chromedriver");

let wd = require("selenium-webdriver");

async function temp() {
    
    let browser = new wd.Builder().forBrowser('chrome').build();
    let matchId = 30880;
    browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
    console.log("hello25");
}

temp();
console.log("hello");