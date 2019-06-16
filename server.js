//file for initial point for node/express server
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

