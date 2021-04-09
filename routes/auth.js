const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models/user');

require('dotenv').config();

router.post('/', (req, res) => {
  const user = new User(req.body.username);
  const token = jwt.sign({ user }, process.env.SECRET);
  res.json({ token });
});

module.exports = router;
