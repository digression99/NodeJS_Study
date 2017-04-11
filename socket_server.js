var net = require('net');

var server = net.createServer(function(client) {
    console.log('client connection : ');
    console.log(' local = %s:%s', client.localAddress, client.localPort);
    console.log(' remote = %s:%s', client.remoteAddress, client.remotePort);

    client.setTimeout(500);
    client.setEncoding('utf8');
    client.on('data', function(data) {
        console.log('received data from client on port %d : %s',
        client.remotePort, data.toString());

        console.log(' bytes received : ' + client.bytesRead);
        writeData(client, 'sending : ' + data.toString());
        console.log(' bytes sent : ' + client.bytesWritten);
    });

    client.on('end', function() {
        console.log('client disconnected');
        server.getConnections(function(err, count) {
            console.log('remaining connections : ' + count);
        });
    });

    client.on('error', function(err) {
        console.log('socket error : ', JSON.stringify(err));
    });

    client.on('timeout', function() {
        console.log('socket timed out');
    });
});

server.listen(8107, function () {
    console.log('server listening : ' + JSON.stringify(server.address()));

    server.on('close', function() {
        console.log('server terminated');
    });

    server.on('error', function(err) {
        console.log('server error : ' + JSON.stringify(err));
    });
});

function writeData(socket, data) {
    var success = !socket.write(data);
    if (!success) {
        (function(socket, data) {
            socket.once('drain', function() {
                writeData(socket, data);
            });
        })(socket, data);
    }
}

