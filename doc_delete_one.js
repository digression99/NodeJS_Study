var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("astro");

    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.find(function(err, items) {
            items.toArray(function(err, itemArr) {
                console.log("before delete : ");
                console.log(itemArr);

                //nebulae.findOneAndDelete()

                nebulae.findAndRemove({type : "planetary"}, [['name', 1]],
                {w : 1}, function(err, results) {
                    console.log("deleted : \n" + results);

                    nebulae.find(function(err, items) {
                        items.toArray(function(err, itemArr) {
                            console.log("after delete : ");
                            console.log(itemArr);

                            db.close();
                        });
                    });
                });
            });
        });
    });
});