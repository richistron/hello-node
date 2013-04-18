// Generated by CoffeeScript 1.6.2
/*
	Hello node
*/


(function() {
  var http;

  http = require("http");

  http.createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    return res.end("Hello node");
  }).listen(1337, "127.0.0.1");

  console.log("Server running at http://127.0.0.1:1337/");

}).call(this);
