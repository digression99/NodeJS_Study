var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:test@localhost:27017";

MongoClient.connect(url, function(err, db) {
    var myDB = db.db("words");
    myDB.collection("word_stats", limitFields);
    setTimeout(function() {
        db.close();
    }, 3000);
});

function limitFields(err, words) {
    words.findOne({word : 'the'}, {fields : {charsets : 0} },
function(err, item) {
    console.log("excluding fields object : ");
    console.log(JSON.stringify(item, null, 2));
});

words.findOne({word : 'the'}, {fields : {word : 1, size : 1, stats : 1} },
function(err, item) {
    console.log("including fields object : ");
    console.log(JSON.stringify(item, null, 2));
});
}