var MongoClient = require('./node_modules/mongodb').MongoClient,
    Server = require('./node_modules/mongodb').Server;

var client = new MongoClient(new Server('localhost', 27017, {
                                socketOptions : { connectTimeoutMS : 500 },
                                poolSize : 5,
                                auto_reconnect : true
                                }, {
                                    numberOfRetries : 3,
                                    retryMilliSeconds : 500
                                }));

client.open(function(err, client) {
    if (err) {
        console.log("connection failed via client object");
    } else {
        var db = client.db("testDB");

        if (db) {
            console.log("connected via client object...");

            db.authenticate("dbadmin", "test", function(err, results) {
                if (err) {
                    console.log("authentication failed...");
                    client.close();
                    console.log("connection closed...");
                } else {
                    console.log("authenticated via client object...");
                    db.logout(function(err, result) {
                        if (!err) {
                            console.log("logged out via client object...");
                        }
                        client.close();
                        console.log("connection closed...");
                    });
                }
            });
        }
    }
});