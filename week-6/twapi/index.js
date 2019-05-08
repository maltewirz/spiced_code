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
            twApi.getTweets(token, function(err, tweets) {
                const data = [];
                if (err) {
                    res.sendStatus(500);
                } else {
                    console.log("we are here");
                    throw new Error();
                    for (let i = 0; i < tweets.length; i++) {
                        let fullTweet = tweets[i].full_text;
                        let urlTweet = tweets[i].entities.urls[0].url;
                    }
                    console.log("funky chicken");
                    res.json(data);
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening`));
