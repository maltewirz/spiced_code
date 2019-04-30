const fs = require("fs");
const myPath = __dirname + "/files";
const chalk = require("chalk");

// logSizes(myPath);
//
// function logSizes(dirStr) {
//     fs.readdir(dirStr, { withFileTypes: true }, (err, files) => {
//         if (err) {
//             console.log(err);
//         }
//         for (let i = 0; i < files.length; i++) {
//             if (files[i].isFile()) {
//                 fs.stat(dirStr + "/" + files[i].name, (err, stat) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                     console.log(
//                         dirStr +
//                             "/" +
//                             files[i].name +
//                             ": " +
//                             chalk.red(stat.size)
//                     );
//                 });
//             } else if (files[i].isDirectory()) {
//                 logSizes(dirStr + "/" + files[i].name);
//             }
//         }
//     });
// }

mapSizes(myPath);
function mapSizes(dirStr) {
    const myFiles = fs.readdirSync(myPath, { withFileTypes: true });
    // console.log(myFiles);
    let obj = {};
    for (let e in myFiles) {
        let name = myFiles[e].name;
        let filesize = fs.statSync(dirStr + "/" + myFiles[e].name).size;
        obj[name] = filesize;
    }
    console.log(obj);
}

//Sync stat
// const myStat = fs.statSync(myFiles[0].name);
// console.log(myStat);
// console.log(myStat.size);
