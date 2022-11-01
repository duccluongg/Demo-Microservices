const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');


exports.register = async function (userParam) {
  console.log(userParam)
  //Create new user
  const newUser = new User(userParam);
  //Hash passwords
  if (userParam.password) {
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hashSync(userParam.password, salt);
  }
  //Save user
  await newUser.save();
  return 'User successfully created!';
};

//LOGIN
exports.login = async function ({ email, password }) {
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, SECRET_KEY, {
      expiresIn: '1d',
    });
    return token;
  }
};

// GET PROFILE
exports.getProfile = async function (userReq) {
  const {userId} = userReq;
  return await User.findById(userId).select('-password -__v');
}
