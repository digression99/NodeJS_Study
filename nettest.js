var myNet = require('net');

var client = net.connect({port : 8107, host : 'localhost'}, function () {
    console.log('client connected');
    client.write("some data\r\n")
});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
})

client.on('end', function() {
    console.log('client disconnected');
});

//server

var net = require('net');
var server = net.createServer(function(client) {
    console.log('client connected');
    client.on('data', function(data) {
        console.log('client sent' + data.toString());
    });

    client.on('end', function(){
        console.log('client disconnected');
    });

    client.write('hello');

});

server.listen(8107, function() {
    console.log('server listening for connections.');
});