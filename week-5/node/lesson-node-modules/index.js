// console.log(__dirname);
// console.log(__filename);
// console.log(process.argv);
// console.log(process.argv[0]);
// myMod.sayHello();

const myMod = require("./myModule.js");
//url is a core module, therefore requires no ./
const url = require("url");
const querystring = require("querystring");
const chalk = require("chalk");

// console.log(url);
// console.log(url.parse("https://spiced.academy/"));
// console.log(querystring);
// console.log(querystring.parse("scroll=infinite&myname=pete"));
// console.log(chalk.red("this is my test string in red"));

process.on("beforeExit", function() {
    console.log("node is about to exit");
});
