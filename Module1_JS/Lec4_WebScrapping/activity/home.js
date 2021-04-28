const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary", cb);

// function cb(error, response, data) {
//     parseDate(data);
// }

// function parseDate(html) {
//     let ch = cheerio.load(html);
//     let allCommentries = ch('div[itemprop="articleBody"] p');

//     let commentory = ch(allCommentries['0']).text();
//     console.log(commentory);
// }

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", cb);

let highestWicketTaker = {};

function cb(error, response, data) {
    parseData(data);
}

function parseData(html) {  
    let highestWicketsoFar = 0;
    let nameOfHighestWicketTaker;
    let economy;

    let ch = cheerio.load(html);

    let bothBowlingTables = ch('.Collapsible .table.bowler');
    let teamName = ch('.section-header.border-bottom.text-danger.cursor-pointer').text();
    console.log(teamName);
    
    //fs.writeFileSync("./bowlingTables.html", bothBowlingTables+"");
    let index;
    for(let i = 0; i < bothBowlingTables.length; i++) {
        let bowlingTable = ch(bothBowlingTables[`${i}`]);
        let allTrs = bowlingTable.find("tbody tr");

        for(let j = 0; j < allTrs.length; j++) {
            let allTds = ch(allTrs[j]).find("td");
            let wicketsTaken = ch(allTds['4']).text();

            if(wicketsTaken > highestWicketsoFar) {
                index = i;
                highestWicketsoFar = wicketsTaken;
                nameOfHighestWicketTaker = ch(allTds['0']).text();
                economy = ch(allTds['5']).text();
            }
        }
    }

    let realIndex;

    if(index == 0) {
        realIndex = 1;
    }
    else {
        realIndex = 0;
    }

    highestWicketTaker.name = nameOfHighestWicketTaker;
    highestWicketTaker.wickets = highestWicketsoFar;
    highestWicketTaker.economy = economy;
    highestWicketTaker.team = teamName;
    console.log(highestWicketTaker);

}