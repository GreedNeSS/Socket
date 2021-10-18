'use strict';

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
	console.dir({ msg, rinfo });
	console.log('Message:', msg.toString());
	server.send(`Hello client ${rinfo.port}`, rinfo.port, rinfo.address,
		err => {
			if (err) {
				throw err;
			}
		});
});

server.bind(3000);
