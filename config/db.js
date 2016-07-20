var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery');

module.exports = mongoose;