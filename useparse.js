var accountStr = '{"name" : "Jedi", "members" : [ "yoda", "obi wan" ], "number" :34512, "location" : "A galaxy..."}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);

var accountObj2 = {
    name : "baggins",
    number : 10645,
    members : ["frodo, bilbo"],
    location : "shire"
};
var accountStr2 = JSON.stringify(accountObj2);
console.log(accountStr2);
