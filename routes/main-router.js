const { checkUser } = require('../middlewares/check-user');
const cookieParser = require('cookie-parser');
const { sessionWithOptions } = require('../helpers/session');

mainRouter = require('express').Router();
mainRouter.use(cookieParser());

mainRouter.use(sessionWithOptions);

mainRouter.post('/', checkUser, (req, res) => {
  if (!req.user) {
    req.session.username_session = '';
    return res.status(401).send({ error: 'Authentication failed ❌' });
  }
  if (req.session.username_session) {
    req.session.username_session = '';
  }
  req.session.username_session = req.user.username;
  req.session.username_session.maxAge = 60000 * 60;
  res.status(301).send({ redirect: '/chat' });
});

module.exports = { mainRouter };
