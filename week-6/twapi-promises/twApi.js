const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getTweets = function(token, screenName) {
    return new Promise(function(resolve, reject) {
        const req = https.request(
            {
                host: "api.twitter.com",
                path: `/1.1/statuses/user_timeline.json?count=2&screen_name=${screenName}&tweet_mode=extended&limit=1`,
                method: "GET",
                headers: {
                    "content-type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                    authorization: `Bearer ${token}`
                }
            },
            res => {
                if (res.statusCode != 200) {
                    reject(new Error(res.statusCode));
                } else {
                    let body = "";
                    res.on("data", chunk => (body += chunk)).on("end", () => {
                        try {
                            body = JSON.parse(body);
                            resolve(body);
                        } catch (err) {
                            console.log(err);
                            reject(err);
                        }
                    });
                }
            }
        );
        req.on("error", err => {
            console.log(err);
            reject(err);
        });
        req.end();
    });
};

exports.getToken = function() {
    return new Promise(function(resolve, reject) {
        const encoded = Buffer.from(
            `${consumerKey}:${consumerSecret}`
        ).toString("base64");
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
                    reject(new Error(res.statusCode));
                } else {
                    let body = "";
                    res.on("data", chunk => (body += chunk)).on("end", () => {
                        try {
                            body = JSON.parse(body);
                            resolve(body.access_token);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        );
        req.on("error", err => {
            console.log(err);
            reject(err);
        });
        req.write(`grant_type=client_credentials`);
        req.end();
    });
};
