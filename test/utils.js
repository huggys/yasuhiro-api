import mongoose from 'mongoose';

beforeEach((done) => {
  function clearDB() {
    for (let name in mongoose.connection.collections) {
      mongoose.connection.collections[name].remove();
    }

    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect('mongodb://localhost/yasuhiro-api-test', (err) => {
      if (err) {
        throw err;
      }
    });
  }

  clearDB();
});

afterEach((done) => {
  mongoose.disconnect();
  return done();
});
