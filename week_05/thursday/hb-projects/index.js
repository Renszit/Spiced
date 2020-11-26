const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./projects.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    console.log("user is requesting GET / route");
    res.render("home", {
        layout: "main", 
        projects,
    });
});

app.listen(8080, ()=> console.log("listening"));