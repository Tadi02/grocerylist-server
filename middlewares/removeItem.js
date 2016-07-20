var Item = require('../models/item');

module.exports = function () {

    return function (req, res, next) {
        if(typeof req.params.id === 'undefined'){
            return next();
        }

        Item.remove({ _id: req.params.id }, function (err) {
            if (err) console.log("Failed to remove item with id " + req.params.id);
            return next();
        });
    }
};