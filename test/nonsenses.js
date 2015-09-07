import restify from 'restify';

let client = restify.createJsonClient({
  url: 'http://localhost:5000',
  version: '*'
});

describe('戯言 API', () => {
  describe('GET /nonsenses', () => {
    it('200が返ること', (done) => {
      client.get('/nonsenses', (err, req, res, obj) => {
        if (err) {
          throw new Error(err);
        }

        assert(res.statusCode === 200);

        done();
      });
    });
  });
});
