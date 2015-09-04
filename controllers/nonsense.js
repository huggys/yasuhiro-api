var mongoose = require('mongoose'),
    Nonsense = mongoose.model('Nonsense');

exports.getNonsenses = function(req, res, next) {
  Nonsense.find({confidential: false}, function(err, nonsenses) {
    res.send(200, nonsenses);
  });
}
