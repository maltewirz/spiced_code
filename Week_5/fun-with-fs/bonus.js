//Goal: writing Part 2 with async version
const fs = require("fs");
const originalPath = __dirname + "/files";

function bonus(myPath) {
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
                console.log(stat.size);
                obj[files[i].name] = stat.size;
                console.log(obj);
            });
        }
        console.log(obj);
        return obj;
    });
}

bonus(originalPath);
