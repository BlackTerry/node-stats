var http = require("http");
const net  = require('net')
var Web3 = require('web3');
var provider = new Web3.providers.HttpProvider('http://localhost:8545');
var web3 = new Web3(provider);

console.log("isConnected=");
web3.eth.net.isListening().then(console.log);

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
