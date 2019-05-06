const express = require("express");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const app = express();
const introPage = require("./intro.js");
app.use(express.static("./public"));

app.use("/", function(req, res, next) {
    // console.log("here");
    introPage.create(function(err, item) {
        if (err) {
            console.log(err);
        } else {
            res.setHeader("content-type", "text/html");
            res.write(item);
            res.end();
        }
    });
});

app.listen(8080, () => console.log("I'm listening"));
