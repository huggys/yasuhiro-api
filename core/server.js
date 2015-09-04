var restify = require('restify'),
    nonsense = require(process.cwd() + '/controllers/nonsense');

var server = restify.createServer({
  name: 'yasuhiro-api'
});

// Bundle Plugins
server.use(restify.queryParser({mapParams: false}));
server.use(restify.jsonp());
server.use(restify.gzipResponse());

// Routes
server.get('/nonsenses', nonsense.getNonsenses);

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
