const fs = require("fs");
const myPath = __dirname + "/files";
const chalk = require("chalk");

logSizes(myPath);

function logSizes(dirStr) {
    fs.readdir(dirStr, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < files.length; i++) {
            if (files[i].isFile()) {
                fs.stat(dirStr + "/" + files[i].name, (err, stat) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(
                        dirStr +
                            "/" +
                            files[i].name +
                            ": " +
                            chalk.red(stat.size)
                    );
                });
            } else if (files[i].isDirectory()) {
                logSizes(dirStr + "/" + files[i].name);
            }
        }
    });
}
