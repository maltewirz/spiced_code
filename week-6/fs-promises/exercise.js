const fs = require("fs");
const myPath = __dirname + "/files";
const chalk = require("chalk");

const { readdir, stat } = require("fs").promises;

function logSizes(dirStr) {
    // console.log(dirStr);
    return readdir(dirStr, { withFileTypes: true })
        .then(files => {
            let arr = [];
            for (let i = 0; i < files.length; i++) {
                if (files[i].isFile()) {
                    let path = `${dirStr}/${files[i].name}`;
                    arr.push(
                        stat(path).then(stat => {
                            console.log(
                                `${dirStr}/${chalk.green(
                                    files[i].name
                                )}: ${chalk.red(stat.size)}`
                            );
                        })
                    );
                } else if (files[i].isDirectory()) {
                    arr.push(logSizes(`${dirStr}/${files[i].name}`));
                }
            }
            // return console.log(arr);
            return Promise.all(arr);
        })
        .catch(err => {
            console.log(err);
        });
}

logSizes(myPath).then(() => {
    console.log("done");
});
