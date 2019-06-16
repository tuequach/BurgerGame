//file for initial point for node/express server
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

//express for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//static directory
app.use(express.static('public'));



