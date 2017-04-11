var uri = "mongodb://dbadmin:test@localhost:27017";
var mongoose = require('mongoose');
var db = mongoose.connect(uri);
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

mongoose.connection.once('open', function() {
    Words.find({word : /grati.*/}, function(err, docs) {
        console.log("before update : ");
        for (var i in docs) {
            console.log(docs[i].word + ' : ' + docs[i].size);
        }

        var query = Words.update({}, {$set : {size : 0}});

        query.setOptions({multi : true});
    query.where('word').regex(/grati.*/);

    query.exec(function(err, results) {
        Words.find({word : /grat.*/}, function(err, docs) {
            console.log("\nafter update : ");
            for (var i in docs) {
                console.log(docs[i].word + " : " + docs[i].size);
            }
            mongoose.disconnect();
        });
    });
    });
});