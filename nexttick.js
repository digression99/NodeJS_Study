var fs = require("fs");
        fs.stat("nexttick.js", function(err, stats) {
            if (stats) { console.log("nexttick.js exists");}
        });

        setImmediate(function() {
            console.log("Immediate timer 1 executed");
        });
        setImmediate(function() {
            console.log("Immediate Timer 2 Executed");
        });
        process.nextTick(function() {
            console.log("next tick 1 executed");
        });
        process.nextTick(function() {
            console.log("next tick 2 executed");
        });