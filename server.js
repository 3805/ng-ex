var express = require('express');
var app = express();

app.use('/bower_components', express.static('bower_components'));
app.use('/scripts', express.static('scripts'));
app.use('/views', express.static('views'));

app.route('/*').get((req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(3000);
