var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var MyParser = bodyParser.urlencoded();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/work', function (req, res) {
    res.send('Hello from work');
});

app.get('/products', function (req, res) {
    res.send('Hello from products');
});

app.post('/namehandler', MyParser, function (req, res) {
    console.log(req.body.firstName);
    res.end('Hello ' + req.body.firstName);
});

var server = app.listen(8088, function () {
    var host = server.address().adress;
    var port = server.address().port;

    console.log('Express app listening at %s %s', host, port);
})