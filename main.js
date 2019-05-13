var http = require("http");

const net  = require('net')

const Web3 = require('web3')

var version = web3.version.network;
console.log(version);

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World\n');
}).listen(50000);

console.log('Server running at http://127.0.0.1:50000/');
