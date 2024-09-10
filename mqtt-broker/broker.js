const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883; // Default MQTT port

server.listen(port, () => {
  console.log(`MQTT broker is running on port ${port}`);
});

// Handle connections
aedes.on('client', (client) => {
  console.log(`Client connected: ${client.id}`);
});

aedes.on('clientDisconnect', (client) => {
  console.log(`Client disconnected: ${client.id}`);
});

aedes.on('publish', (packet, client) => {
  console.log(`Message published: ${packet.payload.toString()}`);
});
