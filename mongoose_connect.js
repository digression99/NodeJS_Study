var mongoose = require('mongoose');
var uri = "mongodb://dbadmin:test@localhost:27017";
mongoose.connect(uri);
mongoose.connection.on('open', function() {
    console.log(mongoose.connection.collection);
    mongoose.connection.db.collections(function(err, names) {
        console.log(names);
        mongoose.disconnect();
    })
});