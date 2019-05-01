const fs = require("fs");
const myPath = __dirname + "/files";
// const chalk = require("chalk");

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

fs.writeFileSync(
    __dirname + "/outputMapSizes.json",
    JSON.stringify(mapSizes(myPath), null, 4)
);

function mapSizes(dirStr) {
    // console.log("dude");
    const files = fs.readdirSync(dirStr, { withFileTypes: true });
    // console.log(myFiles);
    let obj = {};
    for (let i = 0; i < files.length; i++) {
        let name = files[i].name;
        if (files[i].isFile()) {
            let filesize = fs.statSync(dirStr + "/" + files[i].name).size;
            obj[name] = filesize;
        } else if (files[i].isDirectory()) {
            obj[name] = mapSizes(`${dirStr}/${files[i].name}/`);
        }
    }
    return obj;
}
