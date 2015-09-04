var mongoose = require('mongoose');
var nonsenseSchema = mongoose.Schema({
  body: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  confidential: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Nonsense', nonsenseSchema);