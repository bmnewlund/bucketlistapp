var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose'); //Imports the mongoose DB
var cors = require('cors')

//DB Connection
mongoose.connect('mongodb://localhost:bucketlist/bucket'); //Mongoose is the package that we use to talk with the DB

// Middleware
app.use(cors());
app.use(bodyParser.json({ type: '*/*'})); // The "type" is allowing for any type with */*
router(app); // This pulls in the router function from the router.js
// Server
var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);