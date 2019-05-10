const myPath = __dirname + "/files";
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
                            console.log(`${path}: ${stat.size}`);
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
