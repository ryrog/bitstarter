/*var hello = new Buffer(fs.readFileSync('index.html'));
var hello2 = hello.toString('utf8');*/

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("hello2");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

