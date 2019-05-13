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
console.log(result)
});

app.get('/', function (req, res, result) {
    res.render('index');
});

app.listen(50000)
console.log('Server running at http://127.0.0.1:50000/');
