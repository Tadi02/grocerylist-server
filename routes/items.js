var addItem = require('../middlewares/addItem');
var fetchItems = require('../middlewares/fetchItems');
var removeItem = require('../middlewares/removeItem');
var returnJsonResponse = require("../middlewares/returnJsonResponse");
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.get('/items',
        fetchItems(),
        returnJsonResponse()
    );

    app.post('/items/add',
        bodyParser.json(),
        addItem(),
        returnJsonResponse()
    );

    app.delete('/items/:id',
        removeItem(),
        returnJsonResponse()
    );

};
