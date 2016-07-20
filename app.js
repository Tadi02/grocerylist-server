var express = require('express');
var app = express();

app.set('views','views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', function (req, res, next) {
    res.tpl = {};
    res.tpl.error = "";
    return next();
});

app.use('/', function (req, res, next) {
  res.tpl = {};
  res.tpl.error = "";
  return next();
});

require('./routes/items')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
