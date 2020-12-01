const fs = require("fs");
const myPath = __dirname;
let { readdir, stat } = require("fs");
const { promisify } = require("util");
// const { readdir, stat } = require("fs").promises;

readdir = promisify(readdir);
stat = promisify(stat);

// console.log(myPath);

// Part 1

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("error readdir", err);
            return;
        }
        // console.log("content:", content);
        for (let i = 0; i < content.length; i++) {
            if (content[i].isDirectory()) {
                logSizes(`${path}/${content[i].name}`);
            }
            if (content[i].isFile()) {
                fs.stat(`${path}/${content[i].name}`, (error, stats) => {
                    if (error) {
                        console.log("error in for loop", error);
                        return;
                    }
                    console.log(`${path}/${content[i].name} : ${stats.size}`);
                });
            }
        }
    });
}

logSizes(myPath);

//part 2

function mapSizes(path) {
    let content = fs.readdirSync(path, { withFileTypes: true });
    let obj = {};
    for (let i = 0; i < content.length; i++) {
        if (content[i].isFile()) {
            let statSync = fs.statSync(`${path}/${content[i].name}`);
            let size = statSync.size;
            obj[content[i].name] = size;
        }
        if (content[i].isDirectory()) {
            obj[content[i].name] = mapSizes(`${path}/${content[i].name}`);
        }
    }
    return obj;
}

// mapSizes(myPath);

fs.writeFileSync(
    `${myPath}/files/files.json`,
    JSON.stringify(mapSizes(myPath, null, 4))
);
