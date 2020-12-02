const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    // console.log("request made for data.json");
    getToken().then((bearerToken) => {
        return Promise.all([
            getTweets(bearerToken, "NOS"),
            getTweets(bearerToken, "BBCbreaking"),
            getTweets(bearerToken, "nytimes"),
        ])
            .then((results) => {
                let realPunkNews = results[0];
                let punkNews = results[1];
                let hardDriveMag = results[2];
                let mergedResults = [
                    ...realPunkNews,
                    ...punkNews,
                    ...hardDriveMag,
                ];
                let sorted = mergedResults.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                let filteredTweets = filterTweets(sorted);
                res.json(filteredTweets);
            })
            .catch((err) => {
                console.log("error!:", err);
                res.sendStatus(500);
            });
    });
});

app.listen(8080, () => console.log("Server Listening"));
