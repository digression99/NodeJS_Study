

// parse url to obj and to string
var url = require('url');
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);
urlString = url.format(urlObj);
// print the parsed url object
console.log(urlObj);
console.log(urlString);
// interpret a url as a new position
var newResource = '/another/path?querynew';
console.log(url.resolve(urlStr, newResource));

// parse the query string
var qstring = require('querystring');
var params = qstring.parse("name=Brad&color=red&color=blue");
console.log(params);
var qStr = qstring.parse(params);