var http = require('http');
var url = require('url');
var qstring = require('querystring');

function sendResponse(weatherData, res) 
{
    var page = '<html><head><title>external example</title></head>' +
    '<body>' +
    '<form method="post">' +
    'City : <input name = "city"><br>' +
    '<input type="submit" value = "get weather">' +
    '</form>';

    if (weatherData)
    {
        page += '<h1>weather info</h1><p>' + weatherData + '</p>';
    }

    page += '</body></html>';
    res.end(page);
}

function parseWeather(weatherResponse, res) {
    var weatherData = '';

    weatherResponse.on('data', function(chunk) {
        weatherData += chunk;
    });

    console.log("parseWeather weatherData : ");
    console.log(weatherData);

    weatherResponse.on('end', function() {
        sendResponse(weatherData, res);
    });
}

function getWeather(city, res) {
    var options = {
        host : 'api.openweathermap.org',
        path : '/data/2.5/weather?q=' + city +
        '&APPID=6705442a89d0291e7f78494d970d3c29'
       // path : '/data/2.5/forecast/city' + 
       // '?id=2172797&APPID=6705442a89d0291e7f78494d970d3c29'
    };

    console.log("getWeather options : ");
    console.log(options);

    http.request(options, function(weatherResponse) {
        parseWeather(weatherResponse, res);
    }).end();
}

http.createServer(function (req, res) {

    console.log(req.method);

    if (req.method == 'POST')
    {
        var reqData = '';
        req.on('data', function(chunk) {
            reqData += chunk;
        });

        req.on('end', function() {
            var postParams = qstring.parse(reqData);
            console.log("createServer postParams : ");
            console.log(postParams);
            getWeather(postParams.city, res);
        });
    }
    else
    {
        sendResponse(null, res);
    }
}).listen(8080);