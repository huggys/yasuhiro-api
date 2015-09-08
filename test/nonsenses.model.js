import utils from './utils';

const Nonsense = require('../models/nonsense').Nonsense;

describe('戯言 models', () => {
  describe('#create()', () => {
    it('bodyが必須であること', (done) => {
      Nonsense.create({}, (err, createdNonsense) => {
        assert(err !== null);

        done();
      });
    });

    it('新しい戯言が登録できること', (done) => {
      let now = new Date(),
          nonsense = {
        body: 'hoge',
        created_at: now,
        confidential: false
      };

      Nonsense.create(nonsense, (err, createdNonsense) => {
        assert(createdNonsense.body === 'hoge');
        assert(createdNonsense.created_at === now);
        assert(createdNonsense.confidential === false);

        done();
      });
    });
  });
});
