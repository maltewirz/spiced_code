const http = require("http");
const fs = require("fs");
const myPath = __dirname;

const server = http
    .createServer((request, response) => {
        const { headers, method, url } = request;
        const agent = request.headers["user-agent"];
        request.on("error", err => {
            console.log(err);
        });

        if (request.method == "GET") {
            console.log("responding to GET");
            console.log(headers, method, url);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write(
                `<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>`
            );
            response.end();
        } else if (request.method == "HEAD") {
            console.log("responding to HEAD");
            console.log(headers, method, url);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end();
        } else if (request.method == "POST") {
            console.log("responding to POST");
            console.log(headers, method, url);
            let data = "";
            request.on("data", chunk => {
                data += chunk;
            });
            request.on("end", () => {
                console.log(data);
                response.setHeader("Location", "/");
                response.statusCode = 302;
                response.end();
            });
        } else {
            console.log("Neither a POST/GET/HEAD method");
            console.log(headers, method, url);
            response.setHeader("content-type", "text/html");
            response.statusCode = 405;
            response.end();
        }

        let logfile = [];
        var currentDate = new Date("December 17, 1995 03:24:00");
        logfile.push(currentDate, method, url, agent);

        fs.appendFile(`${myPath}/requests.txt`, logfile.join("\t"), err => {
            if (err) {
                console.log(err);
            }
            console.log("append success");
        });
    })
    .listen(8080);
