var TOKEN = require('../config/token');

module.exports = function () {

    return function (req, res, next) {
        if(req.get("AuthToken") === TOKEN) {
            return next();
        }

        res.status(401).end();
    }
};
