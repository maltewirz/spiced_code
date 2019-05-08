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
                    console.log("else function");
                    for (let i = 0; i < tweets.length; i++) {
                        console.log(tweets[i].entities.urls[0] != "undefined");
                        console.log(typeof tweets[i].entities.urls[0]);
                        let fullTweet = tweets[i].full_text;
                        //this produces the error
                        let urlTweet = tweets[i].entities.urls[0].url;
                        let medUrlTweet = tweets[i].entities.media[0].url;

                        let cleanTweet = fullTweet
                            .replace(urlTweet, "")
                            .replace(medUrlTweet, "");

                        if (
                            !cleanTweet.includes(
                                "https://" &&
                                    tweets[i].entities.urls[0] != "undefined"
                            )
                        ) {
                            // console.log("yep");
                            let obj = {};
                            obj.href = urlTweet;
                            obj.text = cleanTweet;
                            // console.log(obj);
                            data.push(obj);
                            // console.log(data);
                        }
                        console.log("fun");
                    }
                    console.log("funky chicken");
                    res.json(data);
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening`));
