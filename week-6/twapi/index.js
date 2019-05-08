const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
        } else {
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    let data = [];
                    for (let i = 0; i < tweets.length; i++) {
                        if (
                            tweets[i].entities.urls != undefined &&
                            tweets[i].entities.urls.length != 0
                        ) {
                            let cleanTweet;
                            let fullTweet = tweets[i].full_text;
                            let urlTweet = tweets[i].entities.urls[0].url;

                            if (
                                tweets[i].entities.media != undefined &&
                                tweets[i].entities.media != 0
                            ) {
                                let medUrlTweet =
                                    tweets[i].entities.media[0].url;
                                cleanTweet = fullTweet
                                    .replace(urlTweet, "")
                                    .replace(medUrlTweet, "");
                                let obj = {};
                                obj.text = cleanTweet;
                                obj.href = urlTweet;
                                data.push(obj);
                            } else {
                                cleanTweet = fullTweet.replace(urlTweet, "");
                                let obj = {};
                                obj.href = urlTweet;
                                obj.text = cleanTweet;
                                data.push(obj);
                            }
                        }
                    }
                    res.json(data);
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening`));
