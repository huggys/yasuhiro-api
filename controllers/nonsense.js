var mongoose = require('mongoose'),
    Nonsense = mongoose.model('Nonsense');

exports.getNonsenses = function(req, res, next) {
  Nonsense.find({confidential: false}, function(err, nonsenses) {
    if (err) {
      res.json(500, {
        type: false,
        date: 'Error occured: ' + err
      });
    } else {
      res.json(200, {
        type: !!nonsenses.length,
        data: nonsenses
      });
    }
  });
}
