var db = require ('../models');

module.exports = function(app) {

    //route for grabbing all burgers
    app.get('/', function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger){
            res.json(dbBurger);
        });
    });

  //route for creating all burgers
  app.post('/', function(req, res) {
    db.Burger.create({
        name: req.body.name
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

app.put('/:id', function(req, res) {
    db.Burger.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});
