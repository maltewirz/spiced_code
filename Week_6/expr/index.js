const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const introPage = require("./intro.js");
const basicAuth = require("basic-auth");

//middleware cookieParser
app.use(require("cookie-parser")());

//checking if cookie set already -- Prio 1
app.use(function(req, res, next) {
    if (req.cookies.switch != "positive" && req.url != "/cookie") {
        console.log(req.url);
        // console.log(req.cookies.url);
        if (!req.cookies.url) {
            res.cookie("url", req.url);
        }
        res.redirect("/cookie");
        res.end();
        return;
    } else {
        next();
    }
});

//code for basic-Auth -- Prio 2
app.use("/github", function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
});

//serving contents of public folder  -- Rest of PRIO
app.use(express.static("./public"));

//middleware bodyParser
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

// res.cookie //function
// req.cookies //object

//setting up get page
app.get("/cookie", function(req, res) {
    console.log("GET request");
    res.send(`<!doctype html><title>Cookie!</title>
            <form method="post">
                <p>Hereby I accept the cookie:<input type="checkbox" name="accept"></p><button type="submit" name="button">submit</button>
            </form>`);
});

app.post("/cookie", function(req, res) {
    console.log("POST request");
    if (req.body.accept == "on") {
        console.log("here");
        res.cookie("switch", "positive");
        console.log("redirect url" + req.cookies.url);
        res.redirect(req.cookies.url);
        res.end();
        return;
    } else {
        res.send(`<!doctype html><title>Cookie Fail!</title>
            <p>Sorry, you have to accept the cookie to surf our page</p>`);
    }
});

//dynamic intro page serving
app.use("/", function(req, res) {
    introPage.create(function(err, item) {
        if (err) {
            console.log(err);
        } else {
            res.setHeader("content-type", "text/html");
            res.write(item);
            res.end();
            return;
        }
    });
});

app.listen(8080, () => console.log("I'm listening"));
