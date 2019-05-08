const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
        } else {
            console.log(token);
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
