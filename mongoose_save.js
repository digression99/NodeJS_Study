//var uri = "mongodb://dbadmin:test@localhost:27017/words";
var uri = 'mongodb://localhost/words';
var mongoose = require('mongoose');
var db = mongoose.connect(uri);
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

mongoose.connection.once('open', function() {
    var query = Words.findOne().where('word', 'book');

    query.exec(function(err, doc) {
        console.log("is document new ? " + doc.isNew);
        console.log("\nbefore save : ");
        console.log(doc.toJSON());

        doc.set('word', 'Book');
        doc.set('first', 'B');
        doc.set('letters', ['B', 'o', 'k']);

        console.log("is changed ? : ");
        console.log(doc.toJSON());

        console.log("\nModified fields : ");
        console.log(doc.modifiedPaths());

        doc.save(function(err) {;

            Words.findOne({word : 'book'}, function(err, doc) {
                console.log("\nAfter save : ");
                if (doc == null) {
                    console.log("\n No doc found.");
                }
                else {
                    console.log(doc.toJSON());
                }
                mongoose.disconnect();
            });
        });
    });
});
