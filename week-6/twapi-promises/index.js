const express = require("express");
const app = express();
const twApi = require("./twApi");
const util = require("util");
const getTwitToken = util.promisify(twApi.getToken);
const getTwitTweets = util.promisify(twApi.getTweets);

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    getTwitToken()
        .then(token => {
            return getTwitTweets(token);
        })
        .then(tweets => {
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

app.listen(8080, () => console.log(`I'm listening`));
