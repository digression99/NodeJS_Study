var accountObj = {
    name : "Baggins",
    number : 10645,
    members : ["frodo, Bilbo"],
    location : "shire"
};
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);