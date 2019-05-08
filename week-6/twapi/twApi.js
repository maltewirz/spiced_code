const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getTweets = function(token, callback) {
    const req = https.request(
        {
            host: "api.twitter.com",
            path:
                "/1.1/statuses/user_timeline.json?screen_name=theonion&tweet_mode=extended&limit=1",
            method: "GET",
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                authorization: `Bearer ${token}`
            }
        },
        res => {
            if (res.statusCode != 200) {
                callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", chunk => (body += chunk)).on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body);
                    } catch (err) {
                        console.log(err);
                        callback(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
        callback(err);
    });
    req.end();
};

exports.getToken = function(callback) {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
        "base64"
    );
    const req = https.request(
        {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                authorization: `Basic ${encoded}`
            }
        },
        res => {
            if (res.statusCode != 200) {
                callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", chunk => (body += chunk)).on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body.access_token);
                    } catch (err) {
                        callback(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
        callback(err);
    });
    req.write(`grant_type=client_credentials`);
    req.end();
};
