const httpStatus = require('http-status');
const userService = require('../services/auth.service');

//REGISTER
exports.register = async function (req, res) {
  try {
    const msg = await userService.register(req.body);
    if (msg) {
      return res.status(httpStatus.CREATED).json({
        message: msg,
      });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

//LOGIN
exports.login = async function (req, res) {
  try {
    const user = await userService.login(req.body);
    if (user) {
      return res.status(httpStatus.OK).json({
        message: user,
      });
    }
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: 'Email or password is incorrect',
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

//LOGIN
exports.getProfile = async function (req, res) {
  try {
    const user = await userService.getProfile(req);
    if (user) {
      return res.status(httpStatus.OK).json({
        message: user,
      });
    }
    else return res.status(httpStatus.NOT_FOUND).json({
      message: "User not found!"
    })
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};
