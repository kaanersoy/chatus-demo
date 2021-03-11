const { checkUser } = require('../middlewares/check-user');
const cookieParser = require('cookie-parser');
const session = require('express-session');

mainRouter = require('express').Router();
mainRouter.use(cookieParser());

const sessionWithOptions = session({
  secret: 'ITSASECRETKEY123163516253',
  name: 'username_cookie',
  proxy: true,
});

if (mainRouter.get('env') === 'production') {
  mainRouter.set('trust proxy', 1);
  sess.cookie.secure = true;
}
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
