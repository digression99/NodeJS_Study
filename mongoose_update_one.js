var uri = "mongodb://dbadmin:test@localhost:27017";
var mongoose = require('mongoose');
var db = mongoose.connect(uri);
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

mongoose.connection.once('open', function() {
    var query = Words.findOne().where('word', 'gratifaction');

    query.exec(function(err, doc) {
        console.log("before update : ");

        console.log(doc.toJSON());
        
        var query = doc.update({$set : {word : 'gratifactions',
        size : 13, last : 's'},
        $push : {letters : 's'}});
        
        query.exec(function(err, results) {
            console.log("\n%d documents updated", results);
            Words.findOne({word : 'gratifactions'}, function(err, doc) {
                console.log("\nafter update : ");
                console.log(doc.toJSON());
                mongoose.disconnect();
            });
        });
    });
});