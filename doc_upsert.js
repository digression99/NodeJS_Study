var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("astro");

    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.find({type : "diffuse"}, function(err, items) {
            items.toArray(function(err, itemArr) {
                console.log("before upsert : ");
                console.log(itemArr);

                nebulae.update( {type : "diffuse"},
                {$set : {ngc:"NGC 3372", name : "Carina", type : "diffuse", location : "Carina"}},
                {upsert : true, w : 1, forceServerObjectId : false},
                function(err, results) {
                    nebulae.find({type : "diffuse"}, function(err, items) {
                        items.toArray(function(err, itemArr) {
                            console.log("after upsert 1 : ");
                            console.log(itemArr);

                            var itemID = itemArr[0]._id;

                            nebulae.update({_id : itemID},
                                {$set : {ngc : "NGC 3372", name : "Carina",
                            type : "Diffuse", location : "Carina"}},
                            {upsert : true, w : 1}, function(err, results) {
                                nebulae.findOne({_id : itemID}, function(err, item) {
                                    console.log("after upsert 2 : ");
                                    console.log(item);
                                    db.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});