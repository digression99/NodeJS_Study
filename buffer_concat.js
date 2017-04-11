var af = new Buffer("African Swallow?");
var eu = new Buffer ("European Swallow?");
var question = new Buffer("air speed velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());