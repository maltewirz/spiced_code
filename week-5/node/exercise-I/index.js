const url = require("url");
const querystring = require("querystring");

//parsing input from cmd and exiting if no input
let str = process.argv[2];
if (!str) {
    process.exit();
}
let parsed = url.parse(str);

//looping through parsed url object while ignoring non relevant object keys
for (let e in parsed) {
    if (
        parsed.hasOwnProperty(e) &&
        parsed[e] != null &&
        e != "slashes" &&
        e != "href" &&
        e != "search"
    ) {
        console.log(`The ${e} is ${parsed[e]}`);
    }
}
//another loop for object in object
let query = querystring.parse(parsed.query);
for (let e in query) {
    console.log(`The value of the ${e} parameter is ${query[e]}`);
}
