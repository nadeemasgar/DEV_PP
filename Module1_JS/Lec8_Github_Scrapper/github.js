let request = require("request");
const cheerio = require("cheerio");

request("https://github.com/topics", cb);

function cb(error, response, data) {
    parseData(data);
}

function parseData(html) {
    let ch = cheerio.load(html);
    let topics = ch('.col-12.col-sm-6.col-md-4.mb-4');
    //console.log(topics+"");
    let topicsName = ch('.f3.lh-condensed.text-center.Link--primary.mb-0.mt-1').text();
      
    
}