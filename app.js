var restify = require('restify');

var server = restify.createServer({
  name: 'yasuhiro-api'
});

// Bundle Plugins
server.use(restify.queryParser({mapParams: false}));

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function getNonsenses(req, res, next) {
  // return 戯言
  return next();
}

// Routes
server.get('/nonsenses', getNonsenses);
