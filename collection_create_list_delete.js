var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var newDB = db.db("newDB");
    
    newDB.listCollections(function(err, listCollections) {
        console.log("initial collections : ");
        console.log(listCollections);

        newDB.createCollection("newCollection", function(err, collection) {
            newDB.listCollections(function(err, listCollections) {
                console.log("collections after creation:");
                console.log(listCollections);
                
                newDB.dropCollection("newCollection", function(err, results) {
                    newDB.listCollections(function(err, listCollections) {
                        console.log("collections after deletion :");
                        console.log(listCollections);
                        db.close();
                    });
                });
            });
        });
    });
});