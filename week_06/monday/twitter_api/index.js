const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log("request made for data.json");

    getToken((err, bearerToken) => {
        if (err) {
            console.log("err getting bearer token", err);
            return;
        }
        console.log("bearerToken:', bearerToken");

        // 2. use this bearer token to get tweets from twitter
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err getting tweets", err);
                return;
            }
            console.log("tweets:", tweets);

            // 3. filter and sort them into the format you need
            // filter out all tweets without a link
            // cut it up so only link and title remain

            const filteredTweets = filterTweets(tweets);
            
            // 4. send data back as JSON
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("Server Listening"));
