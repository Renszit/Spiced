const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

const auth = function(req,res,next) {
    const creds= basicAuth(req);
    if (!creds || creds.name != "Dee" || creds.pass != "Cracks") {
        res.setHeader(
            "WWW-Authenticate",
            "Basic realm = enter your credentials to see this stuff."
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use('/ticker', auth);

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(cookieParser());

app.use((req, res, next) => {
    if (!req.cookies.authenticated) {
        res.cookie("authenticated", false);
        if (req.url !== "/cookie") {
            res.cookie("url", req.url);
            res.redirect("/cookie");
        }
    }
    next();
});

app.get("/cookie", (req, res) => {
    res.send(`
    <form method='POST'>
    <h1>This portfolio uses cookies</h1>
    <h2>Do you accept?</h2>
    <input type="checkbox" name="checkbox">
    <h3>checking this means yes</h3>
    <button> submit </submit>
    </form>
   `);
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Homepage</h1>`);
});

app.post("/cookie", (req, res) => {
    const { checkbox } = req.body;
    if (checkbox) {
        res.cookie("authenticated", true);
        // console.log("authentication is true lune 42");
        res.redirect(req.cookies.url);
    } else {
        res.send(`
        <h1>we really do need you to accept cookies, sorry</h1>
        `);
    }
});

app.use(express.static("./projects"));

app.listen(8080, () => {
    console.log("server listening, port 8080");
});
