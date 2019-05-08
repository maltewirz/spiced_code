const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getToken = function(callback) {
    const auth = Buffer.from(`${consumerKey}: ${consumerSecret}`).toString(
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
                authorization: `Basic ${auth}`
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
        callback(err);
    });
    req.write(`grant_type=client_credentials`);
    req.end();
};

exports.getMadonna = function(callback) {
    const req = https.request(
        {
            host: "elegant-croissant.glitch.me",
            path: "/spotify?q=madonna&type=artist&limit=1",
            method: "GET",
            port: 443,
            headers: {
                "x-funky-chicken": "cuteness"
            }
        },
        res => {
            if (res.statusCode === 200) {
                callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", chunk => (body += chunk));
                res.on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body);
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        callback(err);
    });
    req.end();
};
