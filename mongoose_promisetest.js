var uri = "mongodb://dbadmin:test@localhost:27017";
var promise = require('mpromise');
var mongoose = require('mongoose');

var gnr = new Band({
      name: "Guns N' Roses",
      members: ['Axl', 'Slash']
    });

    var promise = gnr.save();
    assert.ok(promise instanceof require('mpromise'));

    promise.then(function (doc) {
      assert.equal(doc.name, "Guns N' Roses");
    });
