import restify from 'restify';
import utils from './utils';

let client = restify.createJsonClient({
  url: 'http://localhost:5000',
  version: '*'
});

describe('戯言 API', () => {
  describe('POST /nonsenses', () => {
    it('201が返ること', (done) => {
      client.post('/nonsenses', {body: 'hoge'}, (err, req, res, obj) => {
        if (err) {
          throw new Error(err);
        }

        assert(res.statusCode === 201);
        assert(obj.type === true);
        assert(obj.data.body === 'hoge');

        done();
      });
    });
  });

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
