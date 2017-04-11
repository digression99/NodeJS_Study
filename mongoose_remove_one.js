var uri = "mongodb://dbadmin:test@localhost:27017";
var uri2 = 'mongodb://localhost/words';
var mongoose = require('mongoose');
var db = mongoose.connect(uri2);
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

mongoose.connection.once('open', function() {
    var query = Words.findOne().where('word', 'unhappy');

    query.exec(function(err, doc) {
        console.log("before delete :");
        console.log(doc);

        doc.remove(function(err, deletedDoc) {
            Words.findOne( {word : 'unhappy'}, function(err, doc) {
                console.log("\nafter delete : ");
                console.log(doc);
                mongoose.disconnect();
            })
        })
    })
})