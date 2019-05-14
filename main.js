const express = require('express');
var exphbs  = require('express-handlebars');
var http = require("http");
const net  = require('net');
const Web3 = require('web3');


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

const web3 = new Web3(new Web3.providers.IpcProvider("/home/terry/.ether1/geth.ipc",net))
console.log(web3.isConnected()) // return true if connected

web3.version.getNetwork((error, result) => {
    console.log('The result is: ' + result)
});

app.get('/', function (req, res, next) {
    web3.version.getNetwork((error, result) => {
        res.render('index',{
            networkResult:('The result is: ' + result)
        });
    });
});

app.get('/node', function (req, res, next) {
    web3.version.getNode((error, result) => {
        res.render('node',{
            node:('The node is: ' + result)
        });
    });
});

app.get('/block', function (req, res, next) {
    web3.eth.getBlockNumber((error, result) => {
        res.render('block',{
            block:('The block number is: ' + result)
        });
    });
});


app.listen(50000)
console.log('Server running at http://127.0.0.1:50000/');
