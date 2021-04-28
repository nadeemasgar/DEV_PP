const pup = require("puppeteer");
let id = "kawocaw134@tlhao86.com";
let pass = "123456789";

let browserPromise = pup.launch({
    headless : false,
    defaultViewport : false
});

let tab;
browserPromise.then(function(browser) {
    console.log("browser opened");
    let pagesPromise = browser.pages();
    return pagesPromise;
})
.then(function(pages) {
    console.log("page opened");
    tab = pages[0];
    let pageOpenpromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenpromise;
}) 
.then(function() {
    console.log("email typed");
    let idPromise = tab.type("#input-1", id);
    return idPromise;
})
.then(function() {
    console.log("pass typed");
    let passPromise = tab.type("#input-2", pass);
    return passPromise;
})
.then(function() {  
    console.log("login done");
    let loginPromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;
})
.then(function() {
    console.log("waiting for IP to be located");
    let waitPromise = tab.waitForSelector("#base-card-1-link", { visible : true});
    return waitPromise;
})
.then(function() {
    console.log("IP clicked");
    let IPPromise = tab.click("#base-card-1-link");
    return IPPromise;
})
.then(function() {
    console.log("waiting for warm up");
    let waitWarmUp = tab.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
    return waitWarmUp;
})
.then(function() {
    console.log("warm up clicked");
    let clickWarmUp = tab.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
    return clickWarmUp;
})
.then(function() { 
    console.log("waiting for all  questions");
    let waitWarmUp = tab.waitForSelector(".js-track-click.challenge-list-item");
    return waitWarmUp;
})
.then(function() {
    console.log("Fetching the anchor tag");
    let allUrlPromise = tab.$$(".js-track-click.challenge-list-item");
    return allUrlPromise
})
.then(function(data) {
    console.log("Fetching urls from a tag"); 
    // let AllurlFetchPromises = [];
    // for(let i of data) {
    //     let urlFetchOnePromise = tab.evaluate(function(ele) {
    //         return ele.getAttribute("href");
    //     }, i);
    //     AllurlFetchPromises.push(urlFetchOnePromise); 
    // }

    let allLinksPromise = [];

    for(let i = 0; i < data.length; i++) {
        let aTag = data[i];
        let linkPromise = tab.evaluate(function(elem) {
            return elem.getAttribute("href");
        }, aTag);
        allLinksPromise.push(linkPromise);
    }

    let sbkaPromise = Promise.all(allLinksPromise);
    return sbkaPromise;
})
.then(function(allLinks) {   
    console.log("Incomplete Links mil gaya");
    let completeLinks = allLinks.map(function(link) {
        return "https://www.hackerrank.com"+link;
    });
    console.log(completeLinks);
    
    let oneQuesSolvePromise = solveQuestion(completeLinks[0]);
    return oneQuesSolvePromise;
})
.then(function() {
    console.log("One Question Solved Successfully !!!");
})
.catch(function(err) {
    console.log("error occured");
});


function solveQuestion(qLink) {
    return new Promise(function (resolve, reject) {
      let gotoPromise = tab.goto(qLink);
      gotoPromise
        .then(function () {
        //   let waitAndClickPromise = waitAndClick('div[data-attr2="Editorial"]');
            let waitPromise = tab.waitForSelector('div[data-attr2="Editorial"]', { visible: true });
           return waitPromise;
        })
      .then(function () {
        let clickPromise = tab.click('div[data-attr2="Editorial"]');
        return clickPromise;
      })
        .then(function() {
            console.log("on editorial page !!!");
        })
    })
}


