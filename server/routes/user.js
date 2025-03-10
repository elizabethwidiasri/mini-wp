const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/google-signin', userController.googleSignIn)

router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router