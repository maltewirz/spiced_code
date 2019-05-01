//Goal: writing Part 2 with async version
const fs = require("fs");
const originalPath = __dirname + "/files";

function bonus(myPath) {
    let obj = {};
    fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        // console.log(files);

        for (let i = 0; i < files.length; i++) {
            // console.log(files[i].name);
            // obj[files[i].name] = "test";
            // console.log(`${myPath}/${files[i].name}`);
            fs.stat(`${myPath}/${files[i].name}`, (err, stat) => {
                if (err) {
                    console.log(err);
                }
                // console.log(stat.size);
                // console.log(files[i].name);
                obj[files[i].name] = stat.size;
                console.log(obj); // this works!
                return obj;
            });
        }
        console.log(obj); // this is empty!
    });
}

bonus(originalPath);
