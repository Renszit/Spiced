const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = () => {
    return new Promise((resolve, reject) => {
        const creds = `${twitterKey}:${twitterSecret}`;
        const encodedCreds = Buffer.from(creds).toString("base64");
        const config = {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            let body = "";
            res.on("data", (chunk) => (body += chunk));
            res.on("end", () => {
                const parsedBody = JSON.parse(body);
                // console.log("parsedBody:", parsedBody);
                resolve(parsedBody.access_token);
            });
        }

        const req = https.request(config, httpsRequestCallback);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = (bearerToken, account) => {
    return new Promise((resolve, reject) => {
        const getTweetsConfig = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${account}&tweet_mode=extended`,
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            let body = "";
            res.on("data", (chunk) => (body += chunk));
            res.on("end", () => {
                const parsedTweet = JSON.parse(body);
                resolve(parsedTweet);
            });
        }

        const req = https.request(getTweetsConfig, httpsRequestCallback);
        req.end("grant_type=client_credentials");
    });
};

module.exports.filterTweets = (tweets) => {
    let data = [];
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            let tweet = tweets[i].full_text;
            let url = tweets[i].entities.urls[0].url;
            let source = tweets[i].user.name;
            // console.log(tweets[i].entities.urls[0]);
            let cleanTweet = tweet.replace(url, "");
            data.push({
                link: url,
                text: `${cleanTweet}... source: ${source}`,
            });
        }
    }
    return data;
};
