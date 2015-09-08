var mongoose = require('mongoose');
var nonsenseSchema = mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  confidential: {
    type: Boolean,
    default: false
  }
});

exports.Nonsense = mongoose.model('Nonsense', nonsenseSchema);
