const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        // console.log("token fn running");
        if (err) {
            // console.log("yep error token");
            res.sendStatus(500);
        } else {
            console.log("i am the token   " + token);
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(tweets);
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening`));
