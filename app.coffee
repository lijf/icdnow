http = require 'http'
redis = require 'redis'
db = redis.Createclient 4444
as = require 'querystring'
http.createServer((req,res) ->
  if (req.method == 'POST')
    body = ''
    req.on 'data', (data) ->
      body += data
    req.on 'end', ->
      console.log body
      #POST = qs.parse(body)
      #console.log POST
      # use POST
).listen(3001)
console.log 'server running at port 3001'
