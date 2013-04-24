###
	Hello node v0.1.1
	MIT License
	by @richistron
###

# includes
express = require "express"
fs = require "fs"

# start server
app = express();

# routes
app.get "/", (req, res) ->
  res.send "Hello node"  

# listen
app.listen 8080
console.log "Server running at port 8080"