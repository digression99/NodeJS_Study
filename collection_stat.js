var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var newDB = db.db("newDB");

    newDB.createCollection("newCollection", function(err, collection) {
        collection.stats(function(err, stats) {
            console.log(stats);
            db.close();
        });
    });
});