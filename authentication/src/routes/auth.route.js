const router = require('express').Router();
const userController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

//REGISTER
router.post('/register', userController.register);

//LOGIN
router.post('/login', userController.login);

//GET PROFILE3
router.get('/get-profile', auth, userController.getProfile);

router.get('/check-auth', auth, (req, res) => res.status(200).json({ msg: "Authenticated" }));

module.exports = router;
