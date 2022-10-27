const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  },
  username: {
    type: String,
    trim: true,
  },
});

userSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('User', userSchema);
