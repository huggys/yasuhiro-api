import restify from 'restify';
import utils from './utils';

let client = restify.createJsonClient({
  url: 'http://localhost:5000',
  version: '*'
});

describe('戯言 API', () => {
  describe('POST /nonsenses', () => {
    it('bodyを指定しないとErrorが発生すること', (done) => {
      client.post('/nonsenses', (err, req, res, obj) => {
        assert(obj.type === false);
        assert(obj.data.lastIndexOf('Error occured', 0) !== -1);

        done();
      });
    });

    it('bodyを与えると201が返ること', (done) => {
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
