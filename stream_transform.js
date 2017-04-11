var stream = require("stream");
var util = require("util");

util.inherits(JSONObjectStream, stream.Transform);

function JSONObjectStream (opt) {
    stream.Transform.call(this, opt);
};

JSONObjectStream.prototype._transform = function (data, encoding, callback) {
    object = data ? JSON.parse(data.toString()) : "";
    this.emit("object", object);
    object.handled = true;
    this.push(JSON.stringify(object));
    callback();
};

JSONObjectStream.prototype._flush = function (cb) {
    cb();
};

var tc = new JSONObjectStream();

tc.on("object", function(object) {
    console.log("Name : %s", object.name);
    console.log("Color : %s", object.color);
});

tc.on("data", function (data) {
    console.log("Data : %s", data.toString());
});

tc.write('{"name" : "carolinus", "color" : "green"}');
tc.write('{"name" : "Solarius", "color" : "blue"}');
tc.write('{"name" : "lo tae zhao", "color" : "gold"}');
tc.write('{"name" : "ommadon", "color":"red"}');













