var http = require('http');
var options = {
    host : '127.0.0.1',
    path : '/',
    port : '8080',
    method : 'POST'
};

function readJSONResponse(response) {
    var responseData = '';

    response.on('data', function(chunk) {
        responseData += chunk;
    });

    response.on('end', function() {
        var dataObj = JSON.parse(responseData);
        console.log("raw response : " + responseData);
        console.log("message : " + dataObj.message);
        console.log("question : " + dataObj.question);
    });
}

var req = http.request(options, readJSONResponse);

req.write('{"name" : "bilbo", "occupation" : "burglar"}');
req.end();