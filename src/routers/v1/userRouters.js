const express = require('express');
const { signup,login } = require('../../controllers/userController');

const userRouter = express.Router();

userRouter.post('/singup', signup);
userRouter.post('/login', login);

module.exports = userRouter;