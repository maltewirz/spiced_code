const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getToken = function(callback) {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
        "base64"
    );
    // console.log(auth);
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
