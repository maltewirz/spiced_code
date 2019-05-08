const http = require("http");

const server = http.createServer(function(request, response) {
    request.on("error", err => {
        console.log("err ", err);
    });

    console.log(request.url);
    console.log(request.headers);
    console.log(`Req method ${request.method}`);

    if (request.method == "GET") {
        console.log("let's send a response");
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        response.write(`<h1>Hello World</H1>`);
        response.end();
    }
    if (request.method == "POST") {
        console.log("post request");
        let data = "";
        request.on("data", chunk => {
            data += chunk;
            console.log(chunk);
        });
        request.on("end", () => {
            console.log(data);
            response.statusCode = 200;
            response.end();
        });
    }
});

server.listen(8080, () => {
    console.log("I'm listening");
});
