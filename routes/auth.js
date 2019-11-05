const express = require('express');
const router = express.Router();
const loginController=require('../controller/loginController');

router.post('/login',loginController.postLogin);

router.post('/signup',loginController.postsignUp);

module.exports = router;