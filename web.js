var fs = require('fs');
var express = require('express');

var hello = new Buffer(fs.readFileSync('index.html'));
var hello2 = hello.toString('utf8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello2);
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});

