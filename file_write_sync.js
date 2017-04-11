var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];

fd = fs.openSync('veggie.txt', 'w');

while (veggieTray.length) //계속 팝하다 보면 길이가 0이 될 것이다. 
{
    veggie = veggieTray.pop() + "\n";
    var bytes = fs.writeSync(fd, veggie, null, null);
    console.log("wrote %s %dbytes", veggie, bytes);
}

fs.closeSync(fd);