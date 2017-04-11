
// basic instancializing of clientrequest object
var http = require('http');
var options = {
    hostname : 'www.myserver.com',
    path : '/',
    port : '8080',
    method : 'POST'
};

var req = http.request(options, function(response) {
    var str = '';
    response.on('data', function(chunk) {
        str += chunk;
    });

    response.on('end', function() {
        console.log(str);
    });
});

req.end();