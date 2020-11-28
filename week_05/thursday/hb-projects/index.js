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
        home: true,
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    const project = req.params.project;
    const selectedProject = projects.find((item) => item.directory == project);
    console.log("user is going to a project");
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    res.render("description", {
        projects,
        selectedProject,
    });
});

app.listen(8080, () => console.log("listening"));
