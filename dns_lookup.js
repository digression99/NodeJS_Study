var dns = require('dns');

console.log("resolving www.google.com...");

dns.resolve4('www.google.com', function(err, addresses) {
    console.log('IPv4 addresses : ' + JSON.stringify(addresses, false, ' '));

    addresses.forEach(function (addr) {
        dns.reverse(addr, function(err, domains) {
            console.log("reverse for " + addr + ": " + JSON.stringify(domains));
        });
    });
});