var restify = require('restify'),
    nonsense = require('./routes/nonsense.js');

var server = restify.createServer({
  name: 'yasuhiro-api'
});

// Bundle Plugins
server.use(restify.queryParser({mapParams: false}));
server.use(restify.jsonp());
server.use(restify.gzipResponse());

// Routes
server.get('/nonsenses', nonsense.getNonsenses);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
