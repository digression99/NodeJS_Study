var fs = require('fs');
var options = {
    encoding : 'utf8',
    flag : 'r'
};

fs.readFile('config.txt', options, function(err, data) {
    if (err) {
        console.log("failed to open config file.");
    }
    else
    {
        console.log("config loaded.");
        var config = JSON.parse(data);
        console.log("max files : " + config.maxFiles);
        console.log("max connections : " + config.maxConnections);
        console.log("root path : " + config.rootPath);
    }
});

