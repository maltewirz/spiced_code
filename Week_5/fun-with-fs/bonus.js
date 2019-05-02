//Goal: writing Part 2 with async version
//--currently unfinished
const fs = require("fs");
const originalPath = __dirname + "/files";

function bonus(myPath, callback) {
    let obj = {};
    fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < files.length; i++) {
            fs.stat(`${myPath}/${files[i].name}`, (err, stat) => {
                if (err) {
                    console.log(err);
                }
                obj[files[i].name] = stat.size;
                callback(obj);
            });
        }
    });
}

function logMyObject(obj) {
    console.log(obj);
}

bonus(originalPath, logMyObject);
