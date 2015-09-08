var mongoose = require('mongoose'),
    Nonsense = mongoose.model('Nonsense');

exports.createNonsense = function(req, res, next) {
  var nonsenseModel = new Nonsense(req.body);

  nonsenseModel.save(function(err, nonsense) {
    if (err) {
      res.json(500, {
        type: false,
        data: 'Error occured: ' + err
      });
    } else {
      res.json(201, {
        type: true,
        data: nonsense
      });
    }
  });
};

exports.getNonsenses = function(req, res, next) {
  Nonsense.find({confidential: false}, function(err, nonsenses) {
    if (err) {
      res.json(500, {
        type: false,
        data: 'Error occured: ' + err
      });
    } else {
      res.json(200, {
        type: !!nonsenses.length,
        data: nonsenses
      });
    }
  });
};
