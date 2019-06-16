var db = require ('../models');

module.exports = function(app) {

    //route for grabbing all burgers
    app.get('/', function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger){
            res.json(dbBurger);
        });
    });

  