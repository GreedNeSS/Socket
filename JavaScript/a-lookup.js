'use strict';

const dns = require('dns');

const options = {
	all: true,
	family: 6,
	hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('github.com', options, (err, adresses) => {
	if (err) throw err;
	console.dir({ adresses });
});
