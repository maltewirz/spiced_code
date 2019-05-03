const http = require("http");
const fs = require("fs");
const path = require("path");

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
        // handling wrong file/url name
        if (typeof stats == "undefined") {
            res.statusCode = 404;
            res.end();
            return;
        }
        let query = __dirname + "/projects" + req.url;
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
            if (ext == ".html") {
                res.setHeader("content-type", "text/html");
            } else if (ext == ".css") {
                res.setHeader("content-type", "text/css");
            } else if (ext == ".js") {
                res.setHeader("content-type", "text/javascript");
            } else if (ext == ".png") {
                res.setHeader("content-type", "image/png");
            }
        } else if (stats.isDirectory()) {
            //add a index.html if a dir request with /
            if (req.url[req.url.length - 1] == "/") {
                query += "index.html";
            }
            //if a dir but / missing
            console.log("requesting a dir");
            if (req.url[req.url.length - 1] != "/") {
                console.log("causing the crash");
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
        // else {
        //     res.statusCode = 404;
        //     res.end();
        // }
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
