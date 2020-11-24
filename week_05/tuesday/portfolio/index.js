const http = require("http");
const fs = require("fs");
const path = require("path");
const { projectList } = require("./part2");

http.createServer((req, res) => {
    req.on("error", (err) => console.log("Req Error,", err));
    res.on("error", (err) => console.log("ResError,", err));

    if (req.method != "GET") {
        res.statusCode = 405; // method not allowed
        return res.end();
    }

    if (req.url == "/") {
        const body = projectList();
        res.write(`
            <!DOCTYPE html>
            <html>
            <title>Portfolio</title>
            ${body}
            </html>
        `);
        return res.end();
    }

    const filePath = __dirname + "/projects" + req.url;

    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403; // forbidden
        console.log("ACCESS NOT GRANTED, PLEASE TURN AROUND");
        return res.end();
    }
    // if url is a directory, serve the index.html file in there
    // otherwise, serve the file being requested

    fs.stat(filePath, (err, stats) => {
        // this err will run if what user is requesting doesn't exist
        if (err) {
            console.log(err);
            res.statusCode = 404; // not found
            return res.end();
        }

        if (stats.isFile()) {
            // console.log("It's a file!");
            let dynamicValue = path.extname(filePath);
            let extensions = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application/json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml",
            };
            res.setHeader("Content-Type", extensions[dynamicValue]);

            const isFileReadStream = fs.createReadStream(filePath);
            isFileReadStream.pipe(res);

            isFileReadStream.on("error", (err) => {
                console.log("line 49", err);
                res.statusCode = 500;
                res.end();
            });
            // we also want to create a readstream here from the filePath
        } else {
            console.log("It's a directory!");

            // if url ends with slash, serve index.html file
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);

                readStreamHtml.on("error", (err) => {
                    console.log("line 66", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                res.statusCode = 302;
                res.setHeader("Location", req.url + "/");
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("portfolio server is running..."));
