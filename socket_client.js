var net = require('net');

function getConnection(connName)
{
    var client = net.connect({port : 8107, host : 'localhost'}, function(){
        console.log(connName + 'connected : ');
        console.log(' local = %s : %s', this.localAddress, this.localPort);
        console.log(' remote = %s : %s', this.remoteAddress, this.remotePort);

        this.setTimeout(500);
        this.setEncoding('utf8');

        this.on('data', function(data) {
            console.log(connName + " from server : " + data.toString());
            this.end();
        });

        this.on('end', function() {
            console.log(connName + " client disconnected");
        });

        this.on('error', function(err) {
            console.log('socket error : ', JSON.stringify(err));
        });

        this.on('timeout', function() {
            console.log('socket timed out');
        });

        this.on('close', function() {
            console.log('socket closed');
        });
    });

    return client;
}

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

var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");

writeData(Dwarves, "more axes");
writeData(Elves, "more arrows");
writeData(Hobbits, "more pipe weed");
