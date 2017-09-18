var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

// Middleware
app.use(bodyParser.json({ type: '*/*'})); // The "type" is allowing for any type with */*
router(app);

// Server
var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);