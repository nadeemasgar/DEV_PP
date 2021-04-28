let cond = true;
let isitdone = new Promise(function (resolve,reject) {
    if(cond) {
        resolve("work is done");
    } else {
        reject("work is not done");
    }
});
//console.log(isitdone);
isitdone.then(function(val){
    console.log(isitdone);
    console.log(val);
}).then(function(val){
    //console.log(isitdone);
    console.log(val);
}).catch(function(val){
    console.log(val);
    throw new Error(err);
}).catch(function(val){
    console.log("gtdfhg");
});
console.log("hello");
