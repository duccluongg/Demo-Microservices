const mongoose = require('mongoose');
const { MONGO_URL } = require('./env');

module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database MONGODB!');
  } catch (err) {
    console.log(err);
  }
};
