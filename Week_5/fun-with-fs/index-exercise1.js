const fs = require("fs");
const myPath = __dirname + "/files/";

///////PART 1 Exercise
logSizes(myPath);

function logSizes(dirStr) {
    //show the files in files folder
    const myFiles = fs.readdirSync(dirStr, { withFileTypes: true });
    //getting name of current file
    const name = myFiles[4].name;
    //display all stats for respective file
    const mySize = fs.statSync(myPath + myFiles[4].name).size;

    console.log(myFiles.length);

    for (let e in myFiles) {
        console.log("do it" + e);
    }

    // writing results to file
    fs.writeFileSync(
        myPath + "/outputExe1.json",
        myPath + name + ": " + mySize
    );
}
