var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("astro");

    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.findOne({type : "Super Nova",}, function(err, item) {
            console.log("before save : ");
            console.log(item);

            item.info = "some new info";
            nebulae.save(item, {w : 1}, function(err, results) {
                nebulae.findOne({_id : item._id}, function(err, savedItem) {
                    console.log("after save : ");
                    console.log(savedItem);

                    db.close();
                });
            });
        });
    });
});