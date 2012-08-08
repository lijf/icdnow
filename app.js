(function() {
  var as, db, http, redis;

  http = require('http');

  redis = require('redis');

  db = redis.Createclient(4444);

  as = require('querystring');

  http.createServer(function(req, res) {
    var body;
    if (req.method === 'POST') {
      body = '';
      req.on('data', function(data) {
        return body += data;
      });
      return req.on('end', function() {
        return console.log(body);
      });
    }
  }).listen(3001);

  console.log('server running at port 3001');

}).call(this);
