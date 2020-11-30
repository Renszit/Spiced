const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = (callback) => {
    // here we are requesting the bearer token from twitter
    // this is an ASYNCHRONOUS process -> we will need to wait
    // until it's finished before moving on!
    // this is why it takes a callback!
    // we'll write this function together
    // console.log('getToken function is correctly called');

    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString("base64");

    const config = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function httpsRequestCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log("parsedBody:", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(config, httpsRequestCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = (bearerToken, callback) => {
    // is going to look very similar to the get token function
    // Once we have our bearer token, we can get the tweets from twitter
    // this is also an ASYNCHRONOUS process - > Hence another cb
    // we'll need to send the bearer token EVERY time we do this.
    // You are going to write this function yo0urselves!
};

module.exports.filterTweets = (tweets) => {
    // synchronous, no callback
    // once we have our tweets, we'll pass them into this funcition
    // to filter and sort them into the format we need
    // This is also for you to complete.
};
