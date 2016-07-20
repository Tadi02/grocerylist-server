var Item = require('../models/Item');

module.exports = function () {

    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') || (req.body.name.length == 0)){
            return next();
        }

        var item = new Item({name: req.body.name, quantity: req.body.quantity, added: new Date()});
        item.save(function (err) {
            if(err) console.log("Could not save item.");
            return next();
        });
    }
};
