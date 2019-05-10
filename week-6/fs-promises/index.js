const myPath = __dirname + "/files";
const chalk = require("chalk");
const { readdir, stat } = require("fs").promises;

logSizes(myPath).then(() => {
    console.log("done");
});

function logSizes(dirStr) {
    return readdir(dirStr, { withFileTypes: true })
        .then(files => {
            let arr = [];
            for (let i = 0; i < files.length; i++) {
                let path = `${dirStr}/${files[i].name}`;
                if (files[i].isFile()) {
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
                    arr.push(logSizes(path));
                }
            }
            return Promise.all(arr);
        })
        .catch(err => {
            console.log(err);
        });
}
