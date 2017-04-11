var util = require('util');

console.log("current directory : " + process.cwd());
console.log("environment settings : " + JSON.stringify(process.env));
console.log("node args : " + process.argv);
console.log("execution path : " + process.execPath);
console.log("execution args : " + JSON.stringify(process.execArgv));
console.log("node version : " + process.version);
console.log("module versions : " + JSON.stringify(process.versions));

console.log("process id : " + process.pid);
console.log("process title : " + process.title);
console.log("process platform : " + process.platform);
console.log("process architecture : " + process.arch);

console.log("memory usage : " + util.inspect(process.memoryUsage()));
var start = process.hrtime();

setTimeout(function() {
    var delta = process.hrtime(start);

    console.log("high res timer took %d seconds and %d nanoseconds",
    delta[0], delta[1]);

    console.log("node has been running %d seconds", process.uptime());
}, 1000);