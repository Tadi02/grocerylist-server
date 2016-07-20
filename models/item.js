var db = require('../config/db');

var Item = db.model('Item', {
    name: String,
    quantity: String,
    added: Date
});

module.exports = Item;