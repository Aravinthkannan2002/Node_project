const express = require('express');
const router = express.Router();

const login = require('./login/login');

router.post('/userinsert', login.userinsert);///////////////////////////user insert api for signup (and check exist user or already user in our database)
router.post('/login', login.login);//////////////////login api for login screen(and aalso  check  and pass Invalid username or password. Please create an account)
router.post('/fetchUsers', login.fetchUsers);/////////////////////this api hit all user in the homepage and it help to status and year filter
router.post('/deleteUser', login.deleteUser);///////////delete username and pwd and email,entered date and updated date in homepage morevertical dropdown(delete)
router.post('/updateuser', login.updateuser);///////////update username and pwd   in homepage morevertical dropdown(update)
router.post('/inactiveuser', login.inactiveuser);///////////////////inactive user by using Toggle icon off
router.post('/activateuser', login.activateuser);///////////////////activate user using togglem icon on
module.exports =  router;
