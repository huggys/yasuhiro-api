var restify = require('restify');

var server = restify.createServer({
  name: 'yasuhiro-api'
});

// Bundle Plugins
server.use(restify.queryParser({mapParams: false}));
server.use(restify.jsonp());
server.use(restify.gzipResponse());

function getNonsenses(req, res, next) {
  res.contentType = 'json';
  res.send(200, {hello: 'world'});
}

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// Routes
server.get('/nonsenses', getNonsenses);
