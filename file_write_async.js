var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd) {
    if (fruitBowl.length) {
        var fruit = fruitBowl.pop() + " ";
        fs.write(fd, fruit, null, null, function(err, bytes) {
            if (err) {
                console.log("file write failed.");
            }
            else
            {
                console.log("wrote : %s %dbytes", fruit, bytes);
                writeFruit(fd); // 재귀함수로 계속적으로 writeFruit을 부른다.
            }
        });
    }
    else
    {
        fs.close(fd);
    }
}

fs.open('fruit.txt', 'w', function(err, fd) {
    writeFruit(fd);
});