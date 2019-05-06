const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//middleware function
app.use("/hello", function(req, res, next) {
    console.log(`THE URL IS ${req.url}`);
    console.log(`THE URL REALLY IS ${req.originalUrl}`);
    next();
});

//middleware to parse body request, e.g. from an input field.
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
//middleware adding cookieParser stuff
app.use(cookieParser());

//dir pass, name it public so you know it is public
app.use(express.static("./public"));

app.get("/hello/world", function(req, res) {
    res.send("<!doctype html><title>Hello World!</title><p>Hello World!");
});

//calls the next route that matches url
app.get("/hello/world", function(req, res, next) {
    console.log(req.query);
    if (req.query.skip) {
        return next();
    } else {
        res.status(200).send(
            "<!doctype html><title>Hello World!</title><p>Hello World!"
        );
    }
});

app.get("/test", (req, res) => {
    console.log(req.cookies);
    res.sendFile(__dirname + "/test.html");
});

app.get("/chicken", (req, res) => {
    //pass cookie name and value, both are strings
    res.cookie("disco", "duck");
    res.redirect("/test");
});

app.get("/hello/:name", function(req, res) {
    console.log(req.params);
    const name = req.params.name;
    res.send(`<!doctype html><title>Hello ${name}!</title><p>Hello ${name}!"`);
});

app.get("/hello/world.json", (req, res) => {
    res.json({
        hello: "world"
    });
});

app.post("/hello/*.json", (req, res) => {
    console.log(req.body);
    res.json({
        hello: "world"
    });
});

app.get("*", (req, res) => {
    res.send("<!doctype html><title>404 Not Found</title><p>404 Not Found");
});
app.listen(8080, () => console.log("I'm listening"));
