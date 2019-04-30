const fs = require("fs");
const myPath = __dirname;
const myText = "Let's write our first file salt";

//////////Writing files

// //Async Version:
// fs.writeFile(myPath + "/mytext.txt", myText, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("it worked!");
// });
//
// // Sync Version:
// const obj = {
//     name: "Salt",
//     codingSkills: ["css", "js", "html"]
// };
// //passed the pbject, null second argurment, 4 empty spaces
// fs.writeFileSync(myPath + "/myFiles.json", JSON.stringify(obj, null, 4));

//////////// Reading files
// //ASync reading the directory including files
// fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log("files: ", files);
//     console.log(files[0].isFile());
//     console.log(files[0].isDirectory());
// });

//Sync reading
const myFiles = fs.readdirSync(myPath, { withFileTypes: true });
// console.log(myFiles[0].name);

// //Sync stat
// const myStat = fs.statSync(myFiles[0].name);
// console.log(myStat);
// console.log(myStat.size);
// //Async Stat
// fs.stat(myPath + "/index.js", (err, stat) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(stat);
// });

////Async reading of secret file and outputting
// fs.readFile(myPath + "/mySecretSaltFile.js", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("data ", data);
// });
//////Async reading of secret file and outputting
// const myFile = fs.readFileSync(myPath + "/mySecretSaltFile.js", "utf8");
// console.log(myFile);

//// Objects adding Keys rehearsal
// obj.name = "ivana"  // this adds the "name" key with property "ivana"

// let obj = {};
//
// var key = "FullName";
// var name = "Peter Anderson";
//
// obj[key] = name;
//
// console.log(obj);

// let obj = {};
//
// var arr = ["Kill Bill 1", "Kill Bill 2", "Django Unchained", "Pulp Fiction"];
//
// for (var i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
// }
//
// console.log(obj);
//
// fs.writeFileSync(myPath + "/films.json", JSON.stringify(obj, null, 4));
