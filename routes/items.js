var addItem = require('../middlewares/addItem');
var returnJsonResponse = require("../middlewares/returnJsonResponse");
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.post('/items/add',
        bodyParser.json(),
        addItem(),
        returnJsonResponse()
    );
};
