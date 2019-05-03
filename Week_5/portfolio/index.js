const http = require("http");
const fs = require("fs");
const path = require("path");
const introPage = require("./intro.js");

introPage.create();

http.createServer((req, res) => {
    //making sure nothing else than "get" is allowed
    if (req.method != "GET") {
        res.statusCode = 405;
        res.end();
        return;
    }
    //security cleaning of input
    const myPath = path.normalize(__dirname + "/projects/" + req.url);
    if (!myPath.startsWith(__dirname + "/projects/")) {
        res.statusCode = 403;
        res.end("Intruder Alert");
        return;
    }

    //actual file handling
    fs.stat(myPath, (err, stats) => {
        let query = __dirname + "/projects" + req.url;
        // handling wrong file/url name
        if (typeof stats == "undefined") {
            res.statusCode = 404;
            res.end();
            return;
        }
        //handling all other errors
        if (err) {
            console.log(err);
            res.statusCode = 302;
            res.end();
        }

        if (stats.isFile()) {
            console.log("requesting a file");
            //checks the request file extension
            const ext = path.parse(__dirname + "/projects" + req.url).ext;
            //checks ext and replaces Header appropriately
            let types = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application/json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml"
            };
            res.setHeader(`content-type`, `${types[ext]}`);
        } else if (stats.isDirectory()) {
            console.log("requesting a dir");
            //add a index.html if a dir request with /
            if (req.url[req.url.length - 1] == "/") {
                query += "index.html";
            }
            //if a dir but / missing
            if (req.url[req.url.length - 1] != "/") {
                console.log("causing the crash");
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
            if (req.url == "/") {
                console.log(finalHtml);
                res.statusCode = 200;
                introPage.pipe(res);
                res.end();
            }
        }
        //serving the file
        const readStream = fs.createReadStream(query);
        res.statusCode = 200;
        readStream.pipe(res);
        readStream.on("error", err => {
            console.log(err);
            res.statusCode = 404;
            res.end();
        });
    });
}).listen(8080, () => console.log(`I'm listening`));
