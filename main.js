var http = require("http");
const net  = require('net')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.IpcProvider("\\\\.\\ether1\\geth.ipc",net))
console.log(web3.isConnected()) // return true if connected

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(50000);

// Console will print the message
console.log('Server running at http://127.0.0.1:50000/');
