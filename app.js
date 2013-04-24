
/*
	Hello node v0.1.1
	MIT License
	by @richistron
*/

(function() {
  var app, express, fs;

  express = require("express");

  fs = require("fs");

  app = express();

  app.get("/", function(req, res) {
    return res.send("Hello node");
  });

  app.listen(8080);

  console.log("Server running at port 8080");

}).call(this);
