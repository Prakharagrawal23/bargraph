const mqtt = require('mqtt');
const host = 'localhost'; // Use your localhost IP
const port = 1883; // Port of your MQTT broker

// Connect to the MQTT broker
const client = mqtt.connect(`mqtt://${host}:${port}`);

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Subscribe to a topic
  client.subscribe('test/topic', (err) => {
    if (err) {
      console.error('Subscription error:', err);
    }
  });

  // Publish a message
  client.publish('test/topic', 'Hello from MQTT client!', (err) => {
    if (err) {
      console.error('Publish error:', err);
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Message received on topic "${topic}": ${message.toString()}`);
});

client.on('error', (err) => {
  console.error('Connection error:', err);
});
