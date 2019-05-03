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
        if (err) {
            console.log(err);
            res.statusCode = 404;
        }
        console.log("i'm live");

        const readStream = fs.createReadStream(
            __dirname + "/projects/spotify_handlebars/logo.png"
        );

        //send request.
        //determine if file or directory.
        //// if file: pipe it out, set header and content type correctly
        //from extension of path.parse, tels you which header to set.
        ///if directory: standard webserver behaviour:open index.html
        ////// if url == directory, serve index.html. if no index.html, server 404.
        //use stat to check for index.html. otherwise use readstreams error handlnig to serve 404
    });

    //example code
    res.setHeader("content-type", "image/jpeg");
    const readStream = fs.createReadStream(
        __dirname + "/projects/spotify_handlebars/logo.png"
    );
    readStream.pipe(res);
    readStream.on("error", err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    });
}).listen(8080, () => console.log(`I'm listening`));
