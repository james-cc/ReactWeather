var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express is serving on port 3000');
});
