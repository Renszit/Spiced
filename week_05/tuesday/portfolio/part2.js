const fs = require("fs");
const projects = `${__dirname}/projects`;

module.exports.projectList = function () {
    let paths = fs.readdirSync(projects);
    let htmlString = "";
    for (let i = 0; i < paths.length; i++) {
        htmlString += `<div><a href="${paths[i]}">${paths[i]}</a></div>`;
    }
    return htmlString;
};

// get a list of all your projects that are inside your projects folder
//(you'll get an array of names) - use readdirSync
// loop through your list and create a string of html and a link for each item in the directory
// make sure you RETURN the completed html string
