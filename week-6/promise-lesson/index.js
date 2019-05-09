let dbl = require("./dbl.js");

var promise = dbl(3);

// console.log(promise);
promise
    .then(function(val) {
        console.log(val);
        return val;
    })
    .then(function(val) {
        console.log(val + 2);
    })
    .catch(function(err) {
        console.log(err);
    });
//
