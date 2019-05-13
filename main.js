var http = require("http");

const net  = require('net')

const Web3 = require('web3')

console.log(web3.isConnected()) // return true if connected

var version = web3.version.getNode(callback(error, result)());

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World\n');
}).listen(50000);

console.log('Server running at http://127.0.0.1:50000/');
