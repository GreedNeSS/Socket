'use strict';

const dns = require('dns');

dns.lookupService('140.82.121.3', 443, (err, host, service) => {
	if (err) throw err;
	console.log({ host, service });
});
