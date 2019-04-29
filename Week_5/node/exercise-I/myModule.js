const url = require("url");
const querystring = require("querystring");

function transform(str) {
    let parsed = url.parse(str);

    console.log("The protocol is " + parsed.protocol);
    console.log("The host is " + parsed.host);
    console.log("The hostname is " + parsed.protocol);
    console.log("The port is " + parsed.port);
    console.log("The pathname is " + parsed.pathname);
    console.log("The query is " + parsed.query);
    console.log(
        "The value of the a parameter is " + querystring.parse(parsed.query).a
    );
    console.log(
        "The value of the b parameter is " + querystring.parse(parsed.query).b
    );
}

module.exports.transform = transform;
