var addItem = require('../middlewares/addItem');
var fetchItems = require('../middlewares/fetchItems');
var removeItem = require('../middlewares/removeItem');
var returnJsonResponse = require("../middlewares/returnJsonResponse");
var checkToken = require("../middlewares/checkToken");
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.get('/items',
        checkToken(),
        fetchItems(),
        returnJsonResponse()
    );

    app.post('/items',
        bodyParser.json(),
        checkToken(),
        addItem(),
        returnJsonResponse()
    );

    app.delete('/items/:id',
        checkToken(),
        removeItem(),
        returnJsonResponse()
    );

};
