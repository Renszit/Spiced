const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");
const htmlForGet = `
<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="first" placeholder="first name", autocomplete="off">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>
`;

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.error("req err", err));
    res.on("error", (err) => console.error("res err", err));
    var method = req.method;
    if (method === "GET") {
        res.write(htmlForGet);
        res.end();
    }
    if (method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            // console.log("body before parse:", body);
            let parsedBody = querystring.parse(body);
            console.log(chalk`{${parsedBody.color}.bold parsed: ${parsedBody.first}}`);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(
                ` 
                <!doctype html>
                <html>
                <title> ${parsedBody.first}</title>
                <a style="color: ${parsedBody.color}" href= "/"> ${parsedBody.first} </a>
                </html>
                `
            );
           
            res.end();
        });
    }
});

server.listen(8080, () =>
    console.log("listening to colorful console on port 8080")
);
