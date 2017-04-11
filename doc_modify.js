var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("astro");

    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.find({type:"supernova"}, function(err, items){
            items.toArray(function(err, itemArr) {
                console.log("before modify : ");
                console.log(itemArr);

                nebulae.findAndModify({type :"supernova"}, [['name', 1]],
                {$set : {type : "Super Nova", updated : true}},
                {w : 1, new : true}, function(err, doc) {
                    console.log("after modify : ");
                    console.log(doc);
                    db.close();
                });
            });
        });
    });
});