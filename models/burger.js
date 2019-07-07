module.exports = function (sequelize, Datatypes){
    var Burger = sequelize.define('burgers', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
    }, 
        devoured: {
            type: Datatypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;
}

module.exports = burger;