var Item = require('../models/item');

module.exports = function () {
    return function (req, res, next) {
        Item.find({}).exec(function (err, items) {
            if(err) console.log("Could not fetch items");
            res.tpl.items = items;
            return next();
        });
    }
};
