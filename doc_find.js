var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("astro");

    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.find(function(err, items) {
            items.toArray(function(err, itemArr) {
                console.log("document array : ");
                console.log(itemArr);
            });
        });

        nebulae.find(function(err, items) {
            items.each(function(err, item) {
                if (item) {
                    console.log("singular document : ");
                    console.log(item);
                }
            });
        });

        nebulae.findOne({type:'planetary'}, function(err, item) {
            console.log("found one.");
            console.log(item);
        });
    });

    setTimeout(function() {db.close();}, 3000);
});