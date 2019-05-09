const express = require("express");
const app = express();
const twApi = require("./twApi");
// const util = require("util");
// const getTwitToken = util.promisify(twApi.getToken);
// const getTwitTweets = util.promisify(twApi.getTweets);
const getTwitToken = twApi.getToken;
const getTwitTweets = twApi.getTweets;

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    getTwitToken()
        .then(token => {
            return Promise.all([
                getTwitTweets(token, "theonion"),
                getTwitTweets(token, "nytimes"),
                getTwitTweets(token, "bbcworld")
            ]);
        })
        .then(tweets => {
            let theonion = tweets[0];
            let nytimes = tweets[1];
            let bbcworld = tweets[2];
            let mergedArrayOfTweets = theonion.concat(nytimes, bbcworld);
            tweets = mergedArrayOfTweets;
            tweets = tweets
                .filter(item => {
                    return item.entities.urls.length == 1;
                })
                .map(item => {
                    return {
                        text: item.full_text.replace(
                            /(?:https?|ftp):\/\/[\n\S]+/g,
                            ""
                        ),
                        href: item.entities.urls[0].url
                    };
                });
            res.json(tweets);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.get("/", (req, res) => {
    res.redirect("/ticker");
});

app.use(function(req, res) {
    res.status(404).send("That's a 404");
});

app.listen(8080, () => console.log(`I'm listening twapi promises`));
