var spawn = require('child_process').spawn;

var options = {
    env : {user : 'brad'},
    detached : false,
    stdio : ['pipe', 'pipe', 'pipe']
};

var child = spawn('netstat'); // -e => illegal option -e

child.stdout.on('data', function(data) {
    console.log(data.toString());
});

child.stderr.on('data', function(data) {
    console.log(data.toString());
});

child.on('exit', function(code) {
    console.log('child exited with code', code);
});

