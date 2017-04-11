var fs = require('fs');
var config = {
    maxFiles : 20,
    maxConnections : 15,
    rootPath : "/webroot"
};

var configTxt = JSON.stringify(config);
var options = { encoding : 'utf8', flag : 'w' };

fs.writeFile('config.txt', configTxt, function (err) {
    if (err) {
        console.log("config write failed.");
    }
    else{
        console.log("config saved.");
    }
});
