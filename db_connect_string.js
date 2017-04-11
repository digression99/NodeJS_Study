var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", {
    db : { w : 1, native_parser : false },
    server : {
        poolSize : 5,
        socketOptions : { connectTimeoutMS : 500 },
        auto_reconnect : true
    },
    replSet : {},
    mongos : {}
}, function(err, db) {
    if (err) {
        console.log("connection failed via connection string.");
    }
    else
    {
        console.log("connected via connection string...");

        db.logout(function(err, result) {
            if (!err) {
                console.log("logged out via connection string...");
            }
            db.close();
            console.log("connection closed...");
        });
    }
});