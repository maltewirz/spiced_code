//testing async code via callback fn
const fs = require("fs");

module.exports.isdir = function isdir(path, callback) {
    fs.stat(path, function(err, stats) {
        callback(err, stats.isDirectory());
    });
};

// isdir(__dirname, function(err, data) {
//     // if (err) {
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }
// });
