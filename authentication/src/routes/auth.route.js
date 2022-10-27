const router = require('express').Router();
const userController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

//REGISTER
router.post('/register', userController.register);

//LOGIN
router.post('/login', userController.login);

//GET PROFILE
router.get('/get-profile', auth,  userController.getProfile);

module.exports = router;