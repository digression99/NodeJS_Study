var uri = "mongodb://dbadmin:test@localhost:27017";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var wordSchema = new Schema( {
    word : {type : String, index : 1, required : true, unique : true},
    first : {type : String, index : 1},
    last : String,
    size : Number,
    letters : [String],
    stats : {
    vowels:Number, consonants : Number},
    charsets : [{type : String, chars:[String]}]
}, {collection : 'word_stats'});

wordSchema.methods.startsWith = function(letter) {
    return this.first === letter;
};

exports.wordSchema = wordSchema;
console.log("required paths : " );
console.log(wordSchema.requiredPaths());
console.log("Indexes : ");
console.log(wordSchema.indexes());