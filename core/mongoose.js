var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI);

require(process.cwd() + '/models/nonsense');
