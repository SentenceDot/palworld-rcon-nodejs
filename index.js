const Rcon = require('rcon');

const HOST = 'localhost';
const PORT = '25575'
const PASSWORD = 'DotDot_0823'

const conn = new Rcon(HOST, PORT, PASSWORD);

conn.on('auth', function() {
    // You must wait until this event is fired before sending any commands,
    // otherwise those commands will fail.
    console.log("Authenticated");
    console.log("Sending command: help")
    conn.send("help");
  }).on('response', function(str) {
    console.log("Response: " + str);
  }).on('error', function(err) {
    console.log("Error: " + err);
  }).on('end', function() {
    console.log("Connection closed");
    process.exit();
  });
  
  conn.connect();
  