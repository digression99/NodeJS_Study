var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var adminDB = db.admin();

    adminDB.listDatabases(function(err, databases) {
        console.log("before add database list : ");
        console.log(databases);
    });

    var newDB = db.db("newDB");

    newDB.createCollection("new Collection", function(err, collection) {
        if (!err) {
            console.log("new database and collection created");

            adminDB.listDatabases(function (err, databases) {
                console.log("after add database list : ");
                console.log(databases);

                db.db("newDB").dropDatabase(function(err, results) {
                    if (!err) {
                        console.log("database dropped.");
                        setTimeout(function() {
                            adminDB.listDatabases(function(err, results) {
                                var found = false;
                                for (var i = 0; i < results.databases.length; ++i)
                                {
                                    if (results.databases[i].name == "newDB") {
                                        found = true;
                                    }
                                }
                                if (!found) {
                                    console.log("after delete database list : " );
                                    console.log(results);
                                }
                                db.close();
                            });
                        }, 15000);
                    }
                });
            });
        }
    });
});