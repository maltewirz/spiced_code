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
            if (url == "/requests.txt") {
                console.log("url success");
                console.log(`${myPath}/requests.txt`);
                console.log(fs.createReadStream(`${myPath}/requests.txt`));

                const readable = fs.createReadStream(`${myPath}/requests.txt`);
                response.setHeader("content-type", "text/plain");
                response.statusCode = 200;
                readable.pipe(response);

                // response.write(temp);
            } else {
                console.log("responding to GET");
                console.log(headers, method, url);
                response.setHeader("content-type", "text/html");
                response.statusCode = 200;
                response.write(
                    `<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>`
                );
                response.end();
            }
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
        });
    })
    .listen(8080);

// If a `GET` request is made with `/requests.txt` as the url, serve the file. To do this, you will want to [create a read stream]from the file and then [pipe] it to the response (which is a writable stream). You should set the `Content-Type` header to `text/plain` beforehand.
