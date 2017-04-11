var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());
// copy the whole Buffer
var blank = new Buffer(26);
blank.fill();
console.log("blank : " + blank.toString());
alphabet.copy(blank);
console.log("blank : " + blank.toString());
// copy the part of the Buffer
var dashes = new Buffer(26);
dashes.fill('-');
console.log("dashes : " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);
console.log("dashes : " + dashes.toString());
// copy the buffer based on the specific part
var dots = new Buffer('----------------------------');
dots.fill('.');
console.log("dots : " + dots.toString());
for (var i = 0; i < dots.length; ++i)
{
    if (i % 2) {
        dots[i] = alphabet[i];
    }
}
console.log("dots : " + dots.toString());