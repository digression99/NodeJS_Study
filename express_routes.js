var express = require('express');
var url = require('url');
var app = express();
app.listen(80);

app.get('/', function(req, res) {
    res.send("get index");
});

app.get('/find', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var response = 'finding book : author : ' + query.author +
    ' title : ' + query.title;

    console.log('\nQuery url : ' + req.originalUrl);
    console.log(response);
    res.send(response);
});

app.get(/^\/book\/(\w+)\:(\w+)?$/, function(req, res) {
    var response = 'get book : chapter : ' + req.params[0] +
    ' page : ' + req.params[1];
    console.log('\nRegex url : ' + req.originalUrl);
    console.log(response);
    res.send(response);
});

app.get('/user/:userid', function(req, res) {
    var response = 'get user :' + req.param('userid');
    console.log('\nparam url : ' + req.originalUrl);
    console.log(response);
    res.send(response);
});

app.param('userid', function(req, res, next, value) {
    console.log("\n request received with userid : " + value);
    next();
});