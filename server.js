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

//routes connection
require('./routes/api-routes.js')(app);
// require('./routes/html-routes.js')(app);

//syncing sequelize models and starting express app

db.sequelize.synct({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('App is listening on PORT'+ PORT);
    });
});

