const cluster = require("cluster");
const os = require("os");

cluster.setupMaster({
    exec: "index.js"
});

for (let i=0; i < os.cpus().length; i++) {
    cluster.fork();
}

cluster.on("exit",(worker)=> {
    console.log("Worker died", worker.process.pid);
    cluster.fork();
});