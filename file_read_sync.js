var fs = require('fs');
fd = fs.openSync('veggie.txt', 'r');
var veggies = "";

do {
    var buf = new Buffer(5);
    buf.fill();
    var bytes = fs.readSync(fd, buf, null, 5);
    console.log("read %d bytes", bytes);
    veggies += buf.toString();
} while (bytes > 0);

fs.closeSync(fd);
console.log("veggies : " + veggies);