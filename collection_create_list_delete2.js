// An example of retrieving the collections list for a database.
// from mongodb api webpage
var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  test.equal(null, err);

  // Get an empty db
  var db1 = db.db('listCollectionTestDb');
  // Create a collection
  var collection = db1.collection('shouldCorrectlyRetrievelistCollections');
  // Ensure the collection was created
  collection.insertOne({a:1}, function(err, r) {
    test.equal(null, err);

    // Return the information of a single collection name
    db1.listCollections({name: "shouldCorrectlyRetrievelistCollections"}).toArray(function(err, items) {
      test.equal(1, items.length);

      // Return the information of a all collections, using the callback format
      db1.listCollections().toArray(function(err, items) {
        test.ok(items.length >= 1);

        db.close();
      });
    });
  });
});