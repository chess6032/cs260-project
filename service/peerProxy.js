const { WebSocketServer, WebSocket } = require('ws');

function peerProxy(httpServer) {
	// instantiate ws object
	const socketServer = new WebSocketServer({ server: httpServer });

	// TODO: huh?
	socketServer.on('connection', (socket) => {
		// define behaviors for 'message' and 'pong'...ig?
		socket.isAlive = true;

		// MESSAGE FORWARDING
		// forward notifs to everyone except sender
		socket.on('message', function message(data) {
			socketServer.clients.forEach((client) => {
				if (client !== socket && client.readyState === WebSocket.OPEN) {
					client.send(data);
				}
			});
		});

		// RESPOND TO PONG: mark connection as alive
		socket.on('pong', () => {
			socket.isAlive = true;
		});
	});

	// SEND PINGS: periodically ping all clients: 
	//    - mark irresponsive clients as unalive
	//    - terminate connections w/ unalive clients
	setInterval(() => {
		socketServer.clients.forEach(function each(client) {
			if (client.isAlive === false) return client.terminate();

			client.isAlive = false;
			client.ping();
		})
	}, 10000);
}

module.exports = { peerProxy };