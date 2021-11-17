const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let data = require('../data/user')



router.get('/', async (req, res) => {
  if (!req.session.user) {
    return res.render('components/login', {});
  } else {
    return res.redirect('/private');
  }
  
});

router.get('/signup', async (req, res) => {
  if (req.session.user) {
    return res.redirect('/private');
  } else {
    res.render('components/signup', {});
  }
});


router.post('/login', async (req, res) => {

  const { username, password } = req.body;
  let result = null;
  try {
    result = await data.checkUser(username,password);
  } catch (error) {
    res.status(400).render('components/login', {error:error});
    return;
  }
  if(result.authenticated == true){
    req.session.user = { username: username, password: password };
    res.redirect('/private');
    return;
  }
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  let result = null;
  try {
    result = await data.createUser(username,password);
  } catch (error) {
    res.status(400).render('components/signup', {error:error});
    return;
  }
  if(result.userInserted == true){
    req.session.user = { username: username, password: password };
    res.redirect('/private');
    return;
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.render('components/logout', {});
});

module.exports = router;