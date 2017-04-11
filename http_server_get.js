var http = require('http');
var messages = [
    'hello world',
    'from a basic node.js server',
    'take luck'];

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write('<html><head><title>simple http server</title></head>');
    res.write('<body>');
    for (var idx in messages) {
        res.write('\n<h1>' + messages[idx] + '</h1>');
    }
    res.end('\n</body></html>');
}).listen(8080);

