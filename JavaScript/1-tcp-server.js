'use strict';

const net = require('net');

net.createServer(socket => {
	console.dir(socket.address());
	socket.setNoDelay(true);
	socket.write('💗');
	socket.on('data', data => {
		console.log('📨:', data);
	});
	socket.on('error', err => {
		console.log('Client err:', err);
	})
}).listen(2000);
