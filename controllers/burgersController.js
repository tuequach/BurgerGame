var express = requier ('express');

var router = express.Router();
var burger = require ('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.all(function(burgerData){
        res.render('index', {burger_data: burgerData}); 
    });
});

router.post('/burgers/create', function(req, res) {
    burger.create (req.body.burger_game, function (result) {
        console.log(result);
        res.redirect('/');
    });
});
